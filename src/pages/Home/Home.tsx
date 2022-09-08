import { Carousel } from "antd"
import React from "react"
import MainLayout from "src/layouts/MainLayout"
export default function Home() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
  }

  return (
    <MainLayout>
      <h2 className="mb-4">Home</h2>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </MainLayout>
  )
}
