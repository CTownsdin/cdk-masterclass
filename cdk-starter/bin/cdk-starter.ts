#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
// import { CdkStarterStack } from '../lib/cdk-starter-stack';
import { PhotosStack } from '../lib/PhotosStack';
import { PhotosHandlerStack } from '../lib/PhotosHandlerStack';

const app = new cdk.App();

// This is the name of the stack, and the name to look for when doing things like:
// $ cdk destory CdkStarterStack
// new CdkStarterStack(app, 'CdkStarterStack');


// When doing $ cdk deploy --all it will not work if there are references in the stack that don't exist yet.
// So the first time, you'll need to cdk deploy PhotosStack, thereafter, cdk deploy all works bc ref exists then.

new PhotosStack(app, 'PhotosStack');
new PhotosHandlerStack(app, 'PhotosHandlerStack');
