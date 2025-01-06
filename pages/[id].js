import React from 'react';  
import { useRouter } from 'next/router';  
  
export default function Post() {  
  const router = useRouter();  
  const { id } = router.query;  
  return <div>Post ID: {id}</div>;  
}