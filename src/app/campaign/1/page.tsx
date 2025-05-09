import Image from "next/image";
import CTA from './cta';


export default function Campaign() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 pt-24 bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-6">
                {"Did You Know You're Paying a 3% "}
                <span className="text-red-600">TAX</span> to Visa & Mastercard Every Time You Tap To Pay?
            </h1>

            <Image
                src="/campaign/america_trump.webp"
                alt="American Card Schemes"
                width={500}
                height={200}
                className="w-full max-w-md h-auto object-contain mb-6"
                priority
            />

            <div className="text-center text-gray-700 mb-8 space-y-2">
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        Every time you <span className="font-semibold">tap your phone or card to pay</span>, merchants
                        pay a <span className="font-semibold text-red-600">1.5–7% tax</span> to <span
                        className="font-semibold">Visa or Mastercard</span>.
                    </li>
                    <li>
                        These hidden costs hurt your <span className="font-semibold">local businesses</span> and raise
                        prices, ultimately costing <span className="font-semibold">you</span> more.
                    </li>
                    <li>
                        Banks can <span className="font-semibold text-green-600">easily fix this</span> by
                        adopting <span className="font-semibold">domestic payment rails</span> instead of
                        relying on these <span className="font-semibold">Big Corporations</span>.
                    </li>
                </ul>
            </div>

            <CTA/>
        </main>
    );
}
