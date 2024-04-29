import { Construct } from "constructs";
import { Fn, Stack, StackProps } from "aws-cdk-lib";
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda';

export class PhotosStack extends Stack {
  
  // The intrinsic function Fn::ImportValue returns the value of an output exported by another stack. 
  // You typically use this function to create cross-stack references.
  private targetBucket = Fn.importValue('photos-bucket');

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new LambdaFunction(this, 'PhotosHandler', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: Code.fromInline(`
        exports.handler = async (event) => {
          console.log("hello!: " + process.env.TARGET_BUCKET)
        };
      `),
      environment: {
        TARGET_BUCKET: this.targetBucket
      }
    })
  }

}
