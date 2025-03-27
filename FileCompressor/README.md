# 📦 File Compressor

## 📝 Problem Statement

Build a **Node.js file compression tool** that takes an input file and compresses it using **Gzip**. The tool should:

- Accept a file path as input.
- Compress the file and save it with a `.gz` extension.
- Use **Node.js streams** for efficient memory usage.
- Handle errors gracefully (e.g., file not found, permission issues).

## 🚀 Bonus Challenges

- Add a decompression feature to restore the original file.
- Display the original and compressed file sizes.

## To generate large file [src](https://gist.github.com/olivertappin/0fc0b6a76e6555e51f884f9638249de2)

```
dd if=/dev/zero of=large-file-10mb.txt count=1024 bs=10240
```
