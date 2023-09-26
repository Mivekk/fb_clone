import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "us-east-1",
  endpoint: "http://localhost:5000",
  credentials: { accessKeyId: "S3RVER", secretAccessKey: "S3RVER" },
});

export default s3Client;
