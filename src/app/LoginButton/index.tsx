'use client'

import {useEffect} from 'react'
import {Button} from "@/components/ui/button";
import {signInWithGithub, getSession} from "@/app/LoginButton/apic";

function Index({ article = 'helox' }) {
  useEffect(() => {
    // getSession()
  }, []);
  return (
    <Button variant='secondary' onClick={signInWithGithub}>LOGIN</Button>
  )
}

export default Index;
