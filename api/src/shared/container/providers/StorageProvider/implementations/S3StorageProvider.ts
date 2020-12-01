import aws, { S3 } from 'aws-sdk';
import { PutObjectRequest, DeleteObjectRequest } from 'aws-sdk/clients/s3';

import { resolve } from 'path';
import fs from 'fs';
import mime from 'mime';

import uploadConfig from '@config/upload';

import IStorageProvider from '../models/IStorageProvider';

class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: process.env.AWS_DEFAULT_REGION,
    });
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = resolve(uploadConfig.tmpFolder, file);

    const ContentType = mime.getType(originalPath);

    const fileContent = await fs.promises.readFile(originalPath);

    await this.client
      .putObject({
        Bucket: uploadConfig.config.s3.bucket,
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType,
      } as PutObjectRequest)
      .promise();

    await fs.promises.unlink(originalPath);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: uploadConfig.config.s3.bucket,
        Key: file,
      } as DeleteObjectRequest)
      .promise();
  }
}

export default S3StorageProvider;
