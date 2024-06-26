import { Construct } from "constructs";
import { CfnOutput, Fn, Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";

export class PhotosStack extends Stack {
  
  private stackSuffix: string;
  public readonly photosBucketArn: string;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.initSuffix();

    const photosBucket = new Bucket(this, 'PhotosBucket', {
      bucketName: `photosbucket-${this.stackSuffix}`
    })
    this.photosBucketArn = photosBucket.bucketArn
  }

  private initSuffix() {
    const shortStackId = Fn.select(2, Fn.split('/', this.stackId))
    this.stackSuffix = Fn.select(4, Fn.split('-', shortStackId))
  }
}
