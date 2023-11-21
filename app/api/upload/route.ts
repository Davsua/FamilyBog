import { unlink, writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL || '');

//! Una sola imagen
/*export const POST = async (req: any) => {
  const data = await req.formData();
  const file = data.get('file');

  const bytes = await file?.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(process.cwd(), 'public', file.name);
  //writeFile(filePath, buffer);

  const response = await cloudinary.uploader.upload(filePath);
  //console.log(response);

  return NextResponse.json(
    {
      message: 'Img Subida',
      url: response.secure_url,
    },
    { status: 200 }
  );
};*/

// ! mas de una imagen
export const POST = async (req: any) => {
  try {
    const data = await req.formData();
    const files = data.getAll('files');

    console.log(files);

    if (!files || files.length === 0) {
      throw new Error('No files provided');
    }

    const imageUrls = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}_${file.name}`;
      const filePath = path.join(process.cwd(), 'public', fileName);
      writeFile(filePath, buffer);

      const response = await cloudinary.uploader.upload(filePath);
      imageUrls.push(response.secure_url);

      // Eliminar el archivo temporal después de la carga en Cloudinary
      unlink(filePath);
    }

    console.log(imageUrls);

    return NextResponse.json(
      {
        message: 'Images uploaded successfully',
        urls: imageUrls,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error uploading images:', error);

    return NextResponse.json(
      {
        message: 'Error uploading images',
      },
      { status: 500 }
    );
  }
};
