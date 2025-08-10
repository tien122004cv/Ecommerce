import React from 'react'
import Hero from '../Components/Hero'
import NewArrivals from '../Components/NewArrivals'
import TopSelling from '../Components/TopSelling'
import Brandsbar from '../Components/Brandsbar'

export default function Home() {
    return (
        <>
            <Hero />
            <Brandsbar />
            <NewArrivals />
            <TopSelling />
        </>
    )
}
