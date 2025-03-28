import fs from "node:fs";
import process from "node:process";
import zlib from "node:zlib";
import fsPromisyfied from "node:fs/promises";

const gzip = zlib.createGzip();

function init() {
  try {
    const path = process.argv[2];

    if (!path) return;

    const outputFIleName = `${path}.gz`;

    const readStream = fs.createReadStream(path);

    const writeStream = fs.createWriteStream(outputFIleName);

    readStream.pipe(gzip).pipe(writeStream);

    readStream.once("end", async () => {
      const b4CompressionStats = await fsPromisyfied.stat(path);
      const compressedStats = await fsPromisyfied.stat(outputFIleName);
      console.log(
        `Before compression, File size: ${(
          b4CompressionStats.size /
          1024 /
          1024
        ).toFixed(2)}MiB
After compression, File size: ${(compressedStats.size / 1024 / 1024).toFixed(
          2
        )}MiB
Size Reduced by ${(
          (b4CompressionStats.size - compressedStats.size) /
          1024 /
          1024
        ).toFixed(2)}MiB`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

init();
