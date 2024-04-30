import { IAspect } from "aws-cdk-lib";
import { IConstruct } from "constructs";


export class BucketTagger implements IAspect {
  
  private key: string;
  private value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  visit(node: IConstruct): void {
    throw new Error("Method not implemented.");
  }
}