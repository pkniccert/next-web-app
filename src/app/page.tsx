import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="App">
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        <Card title="Next App" description="This is text card" image='{Image}'></Card>
      </main>
      <Footer></Footer>
    </div>
  );
}
