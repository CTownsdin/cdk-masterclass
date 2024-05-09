import { Fn, Stack } from "aws-cdk-lib";


// generate a unique suffix from the last random part of the aws name
export function getSuffixFromStack(stack: Stack) {
  const shortStackId = Fn.select(2, Fn.split('/', stack.stackId))
  const suffix = Fn.select(4, Fn.split('-', shortStackId))

  return suffix;
}


