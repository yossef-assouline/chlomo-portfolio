import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Make sure to export the function as GET
export async function GET() {
  try {
    // First, let's list all folders to debug
    const { folders } = await cloudinary.api.root_folders();
    

    // Then try to get resources from your specific folder
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'Chlomo-portfolio', // Try without trailing slash first
      max_results: 500,
      resource_type: 'image'
    });

    

    if (!result.resources || result.resources.length === 0) {
      // If no resources found, try searching with different parameters
      const searchResult = await cloudinary.search
        .expression('folder:Chlomo-portfolio/*') // Using wildcard
        .sort_by('created_at', 'desc')
        .max_results(500)
        .execute();

     

      if (searchResult.resources && searchResult.resources.length > 0) {
        return NextResponse.json(searchResult.resources);
      }
    }

    // If original request found resources, return those
    return NextResponse.json(result.resources || []);

  } catch (error) {
    console.error('Detailed Cloudinary Error:', {
      message: error.message,
      error: error
    });
    return NextResponse.json(
      { error: error.message, details: error }, 
      { status: 500 }
    );
  }
} 