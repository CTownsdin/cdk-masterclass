import { Stack, StackProps } from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';


export class DataStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps){
    super(scope, id, props)

    // DDB table
    new Table(this, 'SpacesTable', { 
      partitionKey: { 
        name: 'id', 
        type: AttributeType.STRING 
      },
      tableName: 'SpacesStack',
      
    })
  }
}
