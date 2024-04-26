import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";

export class PhotosStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new Bucket(this, 'PhotosBucket', {
      bucketName: 'photosbucket-9384hdkfgh'
    });

    (myBucket.node.defaultChild as CfnBucket).overrideLogicalId('PhotosBucket-abcdef');
  }
}
