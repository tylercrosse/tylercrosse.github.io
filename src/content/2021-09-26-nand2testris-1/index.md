---
title: 'From Boolean Logic Gates to an Assembler'
description: 'The first half of the Nand2Tetris course'
date: '2021-09-26'
tags: ['computer-science', 'short', 'learning-in-public']
path: '/blog/nand2tetris-part1'
draft: false
---

This weekend I completed the first half of the infamous [Nand2Tetris](https://www.nand2tetris.org/) course. This course is a Massively Open Online Course (MOOC) delivered in two parts [on Coursera](https://www.coursera.org/learn/build-a-computer/home).

## What's covered

This whirlwind course tries to build a modern computer from first principles. Most of the course is taught through 12 projects that stack on one another. The first half encompasses Boolean Logic Gates, Boolean Arithmetic Chips, Memory, Machine Language, Computer Architecture, and an Assembler.

### Boolean Logic

All digital devices rely on boolean logic to process binary information. All boolean operations can be constructed using Nand. Here's a simple truth table for the Nand operation.

```txt
a  b  |  Nand(a,b)
--------------------
0  0  |    0
0  1  |    1
1  0  |    1
1  1  |    1
```

I created the logic for several fundamental hardware chips using Hardware Description Language (HDL) for the first project. Each of these chips was built using a combination of Nand gates as a starting point. What follows is some example HDL for an exclusive-or gate:

```VHDL
/**
 * Exclusive-or gate:
 * out = not (a == b)
 */
CHIP Xor {
    IN a, b;
    OUT out;

    PARTS:
    Nand(a=a, b=b, out=nandAB);
    Nand(a=a, b=nandAB, out=nandA);
    Nand(a=nandAB, b=b, out=nandB);
    Nand(a=nandA, b=nandB, out=out);
}
```

The full list of gates I constructed includes, And, And16, DMux, DMux4Way, DMux8Way Mux, Mux4Way, Mux8Way, Mux16, Not, Not16, Or, Or8Way, Or16, and Xor.

### Boolean Arithmetic

Using the simple logic gates I wrote the specification for a simple ALU, an incrementor, and a few adders. The ALU or Arithmetic Logic Unit, acts as the computational centerpiece of the CPU. This unit also gave a brief overview of binary math and two's complement. Here's an outline of the interface and functionality of the ALU I constructed using HDL:

```VHDL
Input:  x[16], y[16],   // Two 16-bit inputs
        zx,             // zero the x input?
        nx,             // negate the x input?
        zy,             // zero the y input?
        ny,             // negate the y input?
        f,              // compute out = x + y (if 1) or x & y (if 0)
        no;             // negate the out output?

Output: out[16],        // 16-bit output
        zr,             // 1 if (out == 0), 0 otherwise
        ng;             // 1 if (out < 0),  0 otherwise

Function:
        if (zx == 1) set x = 0        // 16-bit zero constant
        if (nx == 1) set x = !x       // bitwise not
        if (zy == 1) set y = 0        // 16-bit zero constant
        if (ny == 1) set y = !y       // bitwise not
        if (f == 1)  set out = x + y  // integer 2's complement addition
        if (f == 0)  set out = x & y  // bitwise and
        if (no == 1) set out = !out   // bitwise not
        if (out == 0) set zr = 1      // 16-bit equality comparison
        if (out < 0) set ng = 1       // two's complement comparison
```

### Memory

The course then introduced the notion of time and sequential logic. The course provides a data flip-flip (DFF) as fundamental chip. Using the DFF as a starting point I build a hierarchy of registers and RAM.

```
Data Flip-Flop -> 1-bit register -> 16-bit register -> RAMn
```

### Computer Architecture

The course presented computer architecture after the unit on machine language, an order that makes sense pedagogically. I've reversed the order of these two topics because it makes more sense hierarchically. You need a working CPU to run the machine language, which dovetails into the section on the assembler.

This unit dances through the stored program concept, von Neumann Architecture, the theory of Memory, the role of th e CPU, and finally input and output. The project was one of the more difficult ones of the course and involved building a CPU from the chips built in previous units.

### Machine Language

Machine language is the point where hardware meets software. A machine language is a hardware dependent formalism for coding instructions. It provides a way of controlling hardware to perform arithmetic, logical operations, read and write values from and to the computer's memory, and decide which instruction to fetch and execute next.

Here's an example of a very simple program written in the hack machine language:

```nasm
// Computes R0 = 2 + 3  (R0 refers to RAM[0])

@2
D=A
@3
D=D+A
@0
M=D
```

### Assembler

The first half of this course culminated in writing an assembler that's able to take hack machine language and translate it from its symbolic form into its binary form which can be loaded onto the hack computer. Here's the output of the above example hack machine language from the assembler:

```
0000000000010000
1110110000010000
0000000000010001
1110000010010000
0000000000010010
1110001100001000
```

For this project I wrote a simple parser and symbol table in Typescript and had a lot of fun along the way. I'm looking forward to the last half of this course.