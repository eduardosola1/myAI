import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="w-full flex justify-center p-10">
      <div className="w-full max-w-screen-md space-y-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 underline"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Chatbot
        </Link>
        <h1 className="text-3xl font-bold">AI Chatbot</h1>
        <h2 className="text-2xl font-semibold">
          Terms of Use and Disclaimer for AI Chatbot
        </h2>
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-gray-700">
            <span className="font-semibold">Acceptance of Terms:</span> By
            accessing and using the AI chatbot ("Chatbot") provided by Ramsy
            ("Provider"), you acknowledge that you have read, understood, and
            agreed to be bound by these Terms of Use. If you do not agree with
            these terms, do not use the Chatbot.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">No Warranties:</span> The Chatbot is
            provided "as is" and "as available" without any warranties, express
            or implied. Ramsy makes no representations or warranties regarding
            the accuracy, reliability, completeness, or suitability of the
            Chatbot for any purpose. To the fullest extent permitted by law, all
            warranties, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement, are expressly disclaimed.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Guarantees on Availability or Support:
            </span>{" "}
            Ramsy does not guarantee that the Chatbot will be available at all
            times, be uninterrupted, secure, or error-free. No technical
            support, maintenance, or updates are guaranteed or required to be
            provided.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Limitation of Liability:</span> To 
            the fullest extent permitted by applicable law, the Provider shall 
            not be liable for any direct, indirect, incidental, consequential, 
            special, exemplary, or punitive damages arising from or related to 
            your use of or inability to use the Chatbot. This includes, but is 
            not limited to, investment losses, missed financial opportunities, 
            portfolio underperformance, loss of profits, business revenue, 
            financial assets, or personal savings resulting from reliance on 
            AI-generated insights. The Provider shall not be responsible for 
            any errors, omissions, inaccuracies, or delays in financial market 
            information or for any technical issues, service disruptions, or 
            data loss related to chatbot operation. Even if the Provider has 
            been advised of the possibility of such damages, no liability shall
            be assumed. Users acknowledge that financial markets are unpredictable, 
            and AI-generated responses may not always reflect the most current or 
            accurate information. The Chatbot does not provide personalized 
            investment advice, and users should always conduct independent research
            and consult licensed financial professionals before making any financial
            decisions.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">
              No Legal, Financial, or Professional Advice:
            </span>{" "}
            The Chatbot is intended solely for informational and educational 
            purposes and does not provide financial, legal, tax, or investment advice.
            Any investment insights, stock picks, ETF recommendations, or market trends
            provided by the Chatbot should not be interpreted as personalized financial
            recommendations or endorsements.
            Users should conduct their own research or consult a licensed financial 
            advisor before making any investment decisions. The provider is not responsible
            for any financial losses, investment outcomes, or decisions made based on the 
            chatbot’s responses. The Chatbot does not account for individual financial 
            circumstances and should not be used as the sole basis for investment decisions.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">No Guarantee of Accuracy or Future Investment Performance:</span> The
            Chatbot provides investment-related information based on publicly available 
            data, historical market trends, and AI-generated insights. However, financial
            markets are volatile and unpredictable, and the Chatbot does not guarantee the accuracy, 
            completeness, or timeliness of its responses. The information provided should not be relied
            upon as real-time financial data. Past performance of any stock, ETF, or investment strategy 
            does not guarantee future results. Market conditions, economic policies, and other external 
            factors can change rapidly, affecting the accuracy of AI-generated financial insights. Users
            should independently verify any investment-related information before making financial decisions.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">User Conduct & Responsible Use:</span> Users agree to use
            the Chatbot in a lawful and ethical manner. The Chatbot must not be used for fraudulent
            financial schemes, misleading investment claims, or any illegal activities. Users may not
            attempt to manipulate financial markets, engage in pump-and-dump schemes, or use the Chatbot
            as a substitute for licensed financial advice. The Chatbot should not be used to collect, 
            store, or transmit confidential, personal, or sensitive financial information. Any attempt
            to reverse-engineer, spam, or exploit the Chatbot for malicious purposes is strictly 
            prohibited. The Provider reserves the right to restrict or terminate access to users
            who violate these terms.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">AI Limitations & Data Handling:</span> The Chatbot operates
            using third-party AI technology (OpenAI) and does not store or retain user conversations.
            While the Chatbot may generate investment insights based on publicly available data, it does
            not have real-time access to stock prices, market movements, or proprietary financial databases. 
            AI-generated responses are based on probabilistic models and may contain errors, inconsistencies, 
            or outdated information. Users should be aware that AI is not a substitute for professional
            financial analysis and should verify all information before making financial decisions.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">User Responsibility:</span> You are
            solely responsible for your use of the Chatbot and any actions or
            decisions made based on its output. Ramsy is not responsible for any
            consequences resulting from the use or misuse of the Chatbot.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Data Security and Privacy:</span>{" "}
            You acknowledge that any data transmitted to or through the Chatbot
            is not secured and may be processed by third parties. Do not upload,
            share, or transmit any sensitive, confidential, or personal
            information. All conversations conducted through the Chatbot are
            considered equivalent to public postings, and Ramsy does not
            guarantee the confidentiality or security of any data shared.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Indemnification:</span> You agree to
            indemnify, defend, and hold harmless Ramsy from any claims,
            liabilities, damages, losses, and expenses, including reasonable
            legal fees, arising from your use of the Chatbot or violation of
            these Terms of Use.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Modifications to Terms:</span> Ramsy
            reserves the right to modify these Terms of Use at any time without
            prior notice. Continued use of the Chatbot constitutes acceptance of
            the modified terms.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Governing Law:</span> These Terms of
            Use shall be governed by and construed in accordance with the laws
            of the applicable jurisdiction without regard to its conflict of law
            provisions.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Contact Information:</span> For general
            inquiries regarding these Terms of Use, please refer to the Provider’s 
            official platform or documentation.
          </li>
        </ol>
      </div>
    </div>
  );
}
