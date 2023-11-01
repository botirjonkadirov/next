import { NextResponse } from "next/server";
import courses from '../db.json'
export function GET (request){
    return NextResponse.json(courses)
} 