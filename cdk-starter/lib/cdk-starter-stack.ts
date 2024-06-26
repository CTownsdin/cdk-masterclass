import * as cdk from "aws-cdk-lib";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

// L3Bucket Example
class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    new Bucket(this, "MyL3Bucket", {
      lifecycleRules: [{ expiration: cdk.Duration.days(2) }],
    });
  }
}

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create an s3 bucket 3 ways:
    new CfnBucket(this, "MyL1Bucket", {
      lifecycleConfiguration: {
        rules: [
          {
            expirationInDays: 2,
            status: "Enabled",
          },
        ],
      },
    });

    // This is for supplying parameters at deploy time, like:
    // $ cdk deploy --parameters duration=9
    const duration = new cdk.CfnParameter(this, 'duration', {
      default: 6, 
      minValue: 1,
      maxValue: 10,
      type: 'Number'
    })

    const myL2Bucket = new Bucket(this, "MyL2Bucket", {
      lifecycleRules: [{ 
        expiration: cdk.Duration.days(duration.valueAsNumber) 
      }],
    });
    
    new cdk.CfnOutput(this, "MyL2BucketName", { value: myL2Bucket.bucketName });
    new cdk.CfnOutput(this, "MyL2BucketArn", { value: myL2Bucket.bucketArn });

    new L3Bucket(this, "MyL3Bucket", 3);
  }
}
