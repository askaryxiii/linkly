import MainFooter from "@/components/footer/MainFooter";
import MainHero from "@/components/hero/MainHero";
import ShortenHero from "@/components/hero/ShortenHero";
import MainNav from "@/components/navbar/MainNav";
import Shortentable from "@/components/table/Shortentable";

export default function Home() {
  return (
    <div>
      <MainNav />
      <section className="w-full flex flex-col gap-7 justify-center items-center">
        <MainHero />
        <ShortenHero />
        <Shortentable />
      </section>
      <MainFooter />
    </div>
  );
}
