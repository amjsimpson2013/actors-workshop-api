import fs from 'fs';
import * as promiseFs from 'node:fs/promises';
import path from 'path';
import { pipeline } from 'stream/promises';

export class DownloadFileUtility {
    private readonly fileUrl = process.env["UPLOAD_PATH"] || '';
    private readonly outputPath = process.env["DOWNLOAD_PATH"] || '';

    public async downloadFileToAssetsFolder(fileName: string): Promise<void> {
        const inputFile = path.join(this.fileUrl, fileName);
        const outputFile = path.join(this.outputPath, fileName);
        const uploadedImageExists = await this.fileExists(inputFile);
        const downloadedImageExists = await this.fileExists(outputFile);

        if(uploadedImageExists && !downloadedImageExists) {
            this.downloadFile(inputFile);
        }
    }

    private async fileExists(filePath: string): Promise<boolean> {
        try {
            const stats = await promiseFs.stat(filePath);
            return stats.isFile(); 
        } catch {
            return false;
        }
    }

    private async downloadFile(inputFilePath: string): Promise<void> {
        const readStream = await fs.createReadStream(inputFilePath);
        console.log(`File found`);

        const writeStream = await fs.createWriteStream(this.outputPath);
        console.log(`Downloading file from ${this.fileUrl} to ${this.outputPath}`);

        await pipeline(readStream, writeStream);
        console.log('File downloaded successfully');
    }
}