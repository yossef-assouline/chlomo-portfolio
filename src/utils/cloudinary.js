import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: 'dxmjxtwbu',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'Chlomo-portfolio/', // your folder name with trailing slash
      max_results: 500,
      resource_type: 'image'
    });

    const images = result.resources.map(resource => ({
      id: resource.public_id,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching from Cloudinary:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}