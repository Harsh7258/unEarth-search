'use client';

import HeroSection from "@/components/HeroSection";
import PlaceList from '../components/PlaceList';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
     getPlaceList();
  }, []);
  
  const getPlaceList = async () => {
    const result = await fetch("/api/google-pace?q=hotels in india");
    const data = await result.json();
    console.log(data);
    
  }
  return (
   <>
      <HeroSection />
      <PlaceList />
   </>
  )
}
