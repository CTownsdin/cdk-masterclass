import { Construct } from "constructs";
import { Fn, Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";

export class PhotosStack extends Stack {
  
  private stackSuffix: string;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const myBucket = new Bucket(this, 'PhotosBucket', {
      bucketName: 'photosbucket-9384hdkfgh'
    });
  }

  private initSuffix() {
    const shortStackId = Fn.select(2, Fn.split('/', this.stackId))
    this.stackSuffix = Fn.select(2, Fn.split('-', shortStackId))
  }
}
