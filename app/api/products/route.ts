import { getCollectionProducts } from 'lib/shopify';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  try {
    console.log('Fetching products from "all" collection...');
    const products = await getCollectionProducts({
      collection: 'all'
    });
    
    console.log('Products fetched:', products?.length || 0);
    
    if (!products) {
      console.log('No products found');
      return NextResponse.json({ products: [] });
    }

    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error in /api/products:', error);
    return NextResponse.json(
      { error: 'Error fetching products from "all" collection' }, 
      { status: 500 }
    );
  }
} 