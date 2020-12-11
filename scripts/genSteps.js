#!/usr/bin/env node


const steps = parseInt(process.argv[2]) - 1

for(let i = 0; i <= steps; i=i+4)
  console.log(i/steps, (i+1)/steps, (i+2)/steps, (i+3)/steps)
