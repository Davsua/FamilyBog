import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL || '');

export const POST = async (req: any) => {
  const data = await req.formData();
  const file = data.get('file');

  const bytes = await file?.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(process.cwd(), 'public', file.name);
  writeFile(filePath, buffer);

  const response = await cloudinary.uploader.upload(filePath);
  //console.log(response);

  return NextResponse.json(
    {
      message: 'Img Subida',
      url: response.secure_url,
    },
    { status: 200 }
  );
};

/*export const POST = async (req: any) => {
  const data = await req.formData();
  const file = data.get('file');
  console.log('------------`---------');
  console.log(file);
  console.log('---------------------');

  const bytes = await file?.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(process.cwd(), 'public', file.name);
  console.log('---------------------');
  console.log(filePath);
  console.log('---------------------');

  writeFile(filePath, buffer);

  return NextResponse.json({ file }, { status: 200 });
};*/
