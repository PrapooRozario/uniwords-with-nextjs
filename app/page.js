"use client";
import Lenis from "@studio-freight/lenis";
import { Hind_Siliguri } from "next/font/google";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind",
  subsets: ["bengali"],
  weight: ["400"],
});
export default function Page() {
  const lenis = new Lenis({ duration:3});
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const words = [
    { word: "Shriek", meaning: "চিৎকার করা", pronunciation: "শ্রিক" },
    { word: "Quack", meaning: "হাঁসের ডাক", pronunciation: "কোয়াক" },
    { word: "Sheaf", meaning: "আঁটি বা গুচ্ছ", pronunciation: "শিফ" },
    {
      word: "Gourd",
      meaning: "লাউ বা কুমড়ো জাতীয় সবজি",
      pronunciation: "গোর্ড",
    },
    { word: "Puffy", meaning: "ফুলে ওঠা বা ফোলা", pronunciation: "পাফি" },
    {
      word: "Stubbornness",
      meaning: "একগুঁয়ে স্বভাব",
      pronunciation: "স্টাবর্ননেস",
    },
    { word: "Ruffled", meaning: "অশান্ত বা উসকানো", pronunciation: "রাফল্ড" },
    {
      word: "Outraged",
      meaning: "ক্ষুব্ধ বা ক্ষিপ্ত",
      pronunciation: "আউট্রেইজড",
    },
    { word: "Gobble", meaning: "গোগ্রাসে খাওয়া", pronunciation: "গব্ল" },
    { word: "Flickering", meaning: "ঝিলমিল করা", pronunciation: "ফ্লিকারিং" },
    { word: "Tumescent", meaning: "ফুলে ওঠা", pronunciation: "টিউমেসেন্ট" },
    { word: "Hackles", meaning: "পশুর ঘাড়ের লোম", pronunciation: "হ্যাকলস" },
    {
      word: "Wattles",
      meaning: "মোরগের গলার লাল চামড়া",
      pronunciation: "ওয়াটলস",
    },
    { word: "Scurrying", meaning: "দ্রুত দৌড়ানো", pronunciation: "স্কারিং" },
    { word: "Nonplussed", meaning: "হতবুদ্ধি", pronunciation: "ননপ্লাস্ট" },
    {
      word: "Surrender",
      meaning: "আত্মসমর্পণ করা",
      pronunciation: "সারেন্ডার",
    },
    { word: "Deterring", meaning: "বাধা দেওয়া", pronunciation: "ডিটারিং" },
    { word: "Kerosene", meaning: "কেরোসিন তেল", pronunciation: "কেরোসিন" },
    {
      word: "Piercing",
      meaning: "তীক্ষ্ণ বা ধারালো",
      pronunciation: "পিয়ার্সিং",
    },
    { word: "Provisions", meaning: "সরবরাহ", pronunciation: "প্রোভিশনস" },
    { word: "Fracture", meaning: "ভাঙন বা ফাটল", pronunciation: "ফ্র্যাকচার" },
    {
      word: "Crucifies",
      meaning: "মানসিক বা শারীরিক কষ্ট দেওয়া",
      pronunciation: "ক্রুসিফাইজ",
    },
    {
      word: "Contorted",
      meaning: "বিকৃত বা মুচড়ানো",
      pronunciation: "কন্টোর্টেড",
    },
    { word: "Swollen", meaning: "ফুলে যাওয়া", pronunciation: "স্বোলেন" },
    {
      word: "Snarling",
      meaning: "গর্জন করা বা দাঁত খিঁচানো",
      pronunciation: "স্নার্লিং",
    },
    { word: "Placid", meaning: "শান্ত বা স্থির", pronunciation: "প্ল্যাসিড" },
    { word: "Harsh", meaning: "কঠোর বা রুক্ষ", pronunciation: "হার্শ" },
    { word: "Immobile", meaning: "স্থির বা অনড়", pronunciation: "ইমোবাইল" },
    { word: "Surveillance", meaning: "নজরদারি", pronunciation: "সার্ভেইলেন্স" },
    { word: "Clenched", meaning: "দৃঢ়ভাবে চেপে ধরা", pronunciation: "ক্লেনচড" },
    { word: "Criminal", meaning: "অপরাধী", pronunciation: "ক্রিমিনাল" },
    { word: "Journey", meaning: "যাত্রা", pronunciation: "জার্নি" },
    { word: "Diligent", meaning: "পরিশ্রমী", pronunciation: "ডিলিজেন্ট" },
    { word: "Conscious", meaning: "সচেতন", pronunciation: "কনশাস" },
    { word: "Appeal", meaning: "আবেদন", pronunciation: "অ্যাপিল" },
    { word: "Spectacle", meaning: "দর্শনীয় দৃশ্য", pronunciation: "স্পেকটেকল" },
    { word: "Manifest", meaning: "প্রকাশ করা", pronunciation: "ম্যানিফেস্ট" },
    { word: "Tension", meaning: "চাপ বা চাপা অবস্থা", pronunciation: "টেনশন" },
    { word: "Innocent", meaning: "নির্দোষ", pronunciation: "ইনোসেন্ট" },
    { word: "Vivid", meaning: "উজ্জ্বল বা পরিষ্কার", pronunciation: "ভিভিড" },
    { word: "Reluctant", meaning: "অস্বস্তিকর", pronunciation: "রিলাকট্যান্ট" },
    {
      word: "Primitive",
      meaning: "প্রাথমিক বা প্রাচীন",
      pronunciation: "প্রিমিটিভ",
    },
    { word: "Virtuous", meaning: "সৎ বা নৈতিক", pronunciation: "ভার্চুয়াস" },
    {
      word: "Bewildered",
      meaning: "ভ্রান্ত বা বিভ্রান্ত",
      pronunciation: "বিওইল্ডারড",
    },
    { word: "Authentic", meaning: "প্রামাণিক", pronunciation: "অথেন্টিক" },
    { word: "Eager", meaning: "আগ্রহী", pronunciation: "ইগার" },
    { word: "Sympathy", meaning: "সহানুভূতি", pronunciation: "সিমপ্যাথি" },
    {
      word: "Resilience",
      meaning: "স্থিরতা বা স্থিতিস্থাপকতা",
      pronunciation: "রেজিলিয়েন্স",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="text-white md:max-w-xl max-w-sm mx-auto backdrop-blur-sm bg-white/5 rounded-xl md:p-8 p-5">
        <div>
          <h1 className="md:text-4xl text-3xl font-bold bg-gradient-to-r from-white/80 to-white/60 bg-clip-text text-transparent">
            LESSON 1
          </h1>
        </div>
        <div className="border-t border-white/10 my-6"></div>
        {words.map((word) => (
          <div key={word?.word}> 
            <h1 className="text-white/90 flex md:gap-4 gap-2 items-center p-4 rounded-lg">
              <span className="md:text-2xl text-xl font-semibold">{word?.word}</span>
              <div className="border h-8 border-white/50"></div>
              <span className="text-purple-400"></span>
              <span className={`${hindSiliguri.className} text-white/80 md:text-xl`}>
                {word?.meaning}
                <span className="text-sm text-gray-400 ml-1">
                  ({word?.pronunciation})
                </span>
              </span>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
