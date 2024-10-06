import React from "react";
import "./TermsAndService.scss";

import { useEffect } from "react";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function TermsAndService(props) {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
  return (
    <>
      <div className="tos">
        <div className="tos__header">
          <h1 className="tos__header__heading">Terms of Service</h1>
          <p className="tos__header__description">
            Protecting Your Data, Rights, and Our AI Innovations
          </p>
        </div>

        <div className="tos__body">
          <div className="document">
            <section>
              <h2 className="bold-head">1. Introduction</h2>
              <p className="bold">
                Welcome to AIBC! We provide advanced AI services and products, including chatbots, predictive models, and computer vision solutions. 
                By accessing or using our services, you agree to comply with the terms outlined here. Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="bold-head">2. Services Provided</h2>
              <h3 className="heading-primary">Service Overview</h3>
              <p className="bold">
                AIBC offers AI-driven services such as chatbots, predictive analytics, and computer vision software. Our solutions leverage advanced algorithms to provide 
                automated decision-making support and actionable insights based on user-provided data.
              </p>
              <h3 className="heading-primary">AI Capabilities</h3>
              <p className="bold">
                Our services use machine learning models and AI systems to analyze data and deliver customized outputs. These outputs are based on probabilistic algorithms 
                and may vary in accuracy depending on the quality of the data inputs. These AI models are designed to augment, not replace, human judgment and expertise.
              </p>
              <h3 className="heading-primary">Service Limitations</h3>
              <p className="bold">
                While we strive for high-quality outputs, AIBC does not guarantee the correctness or reliability of any AI-generated results. Our AI models rely on input 
                data provided by users or publicly available sources, and may produce incomplete, outdated, or inaccurate information. Users are solely responsible for 
                verifying the accuracy and appropriateness of AI outputs before acting on them.
              </p>
            </section>

            <section>
              <h2 className="bold-head">3. Data Privacy and Security</h2>
              <h3 className="heading-primary">Data Collection</h3>
              <p className="bold">
                We collect data necessary for the operation and improvement of our services. This includes user-provided data, personal information, interaction logs, and 
                service usage data. All collected data is processed and stored in accordance with our Privacy Policy.
              </p>
              <h3 className="heading-primary">Data Usage</h3>
              <p className="bold">
                Collected data is used to provide services, improve our algorithms, and enhance the user experience. We do not sell or share personal data with third parties 
                without your explicit consent, except as required by law.
              </p>
              <h3 className="heading-primary">Security</h3>
              <p className="bold">
                We take industry-standard precautions to protect user data, including encryption, access controls, and secure servers. However, no system is completely 
                secure, and we cannot guarantee the absolute security of your data.
              </p>
              <h3 className="heading-primary">Third-Party Services</h3>
              <p className="bold">
                AIBC may integrate with third-party services or APIs. We are not responsible for the privacy practices or security of these third-party services. Users should 
                review their privacy policies before using any third-party services through our platform.
              </p>
            </section>

            <section>
              <h2 className="bold-head">4. User Responsibilities</h2>
              <h3 className="heading-primary">Compliance with Laws</h3>
              <p className="bold">
                Users agree to comply with all applicable laws and regulations while using our services. This includes respecting the intellectual property rights of others, 
                adhering to data protection regulations, and avoiding any unlawful activities.
              </p>
              <h3 className="heading-primary">Account Security</h3>
              <p className="bold">
                Users are responsible for maintaining the confidentiality of their account credentials and ensuring that only authorized individuals access their accounts. 
                AIBC is not liable for any unauthorized access to your account or any resulting damages.
              </p>
              <h3 className="heading-primary">Prohibited Conduct</h3>
              <p className="bold">
                Users must not engage in harmful or disruptive behavior, such as introducing malware, engaging in data mining, tampering with our systems, or submitting harmful 
                or unlawful content. Such actions may result in immediate termination of access to our services.
              </p>
            </section>

            <section>
              <h2 className="bold-head">5. Acceptable Use Policy</h2>
              <p className="bold">
                Our services are intended for lawful and responsible use. Users must not:
              </p>
              <ul>
                <li>Use our services to generate or disseminate illegal, harmful, misleading, or inappropriate content.</li>
                <li>Engage in activities that could harm, disable, or interfere with the performance of our systems or services.</li>
                <li>Attempt to reverse-engineer, decompile, or misuse our AI models and algorithms.</li>
                <li>Use our services for any unlawful purpose or in a manner that violates the rights of others.</li>
              </ul>
              <p className="bold">
                Any misuse or violation of these policies may result in suspension or termination of access to our services and potential legal action.
              </p>
            </section>

            <section>
              <h2 className="bold-head">6. Intellectual Property</h2>
              <p className="bold">
                All AI software, algorithms, designs, and other proprietary technology used in our services are owned by AIBC. Users are granted a limited, non-exclusive, 
                non-transferable license to use our services for personal or business purposes in accordance with these terms.
              </p>
              <p className="bold">
                Users retain ownership of the content they submit to our services, but grant AIBC a worldwide, royalty-free, non-exclusive license to use, modify, and display 
                that content for the purpose of providing and improving our services.
              </p>
            </section>

            <section>
              <h2 className="bold-head">7. Disclaimer of Warranties and Limitation of Liability</h2>
              <h3 className="heading-primary">Disclaimer of Warranties</h3>
              <p className="bold">
                AIBC services are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the 
                operation of our services or the accuracy, reliability, or results of our AI-generated outputs. To the fullest extent permitted by law, we disclaim all warranties, 
                including implied warranties of merchantability and fitness for a particular purpose.
              </p>
              <h3 className="heading-primary">Limitation of Liability</h3>
              <p className="bold">
                To the maximum extent permitted by law, AIBC and its affiliates, officers, employees, and licensors will not be liable for any direct, indirect, incidental, 
                special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or related to your use of our services, 
                even if we have been advised of the possibility of such damages.
              </p>
              <h3 className="heading-primary">No Guarantee of Outputs</h3>
              <p className="bold">
                Due to the probabilistic nature of AI models, AIBC does not guarantee the accuracy or reliability of any outputs generated by our services. Users are advised 
                to independently verify and assess any AI-generated information before acting on it. AIBC is not responsible for any actions taken or decisions made based 
                on the outputs of our AI models.
              </p>
            </section>

            <section>
              <h2 className="bold-head">8. Indemnification</h2>
              <p className="bold">
                You agree to indemnify, defend, and hold harmless AIBC, its affiliates, and their respective officers, directors, employees, and agents from any and all claims, 
                damages, liabilities, losses, costs, or expenses (including attorney’s fees) arising out of or related to your use of the services, your violation of these Terms, 
                or your violation of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="bold-head">9. Dispute Resolution and Governing Law</h2>
              <p className="bold">
                These Terms are governed by the laws of AIBC, without regard to its conflict of law principles. Any disputes arising from these Terms or your use 
                of our services will be resolved through binding arbitration in AIBC's Jurisdiction.
              </p>
              <p className="bold">
                You waive no right to participate in any class-action lawsuit or class-wide arbitration related to any dispute with AIBC. All disputes must also not be brought in the 
                user’s individual capacity.
              </p>
            </section>

            <section>
              <h2 className="bold-head">10. Changes to the Terms</h2>
              <p className="bold">
                AIBC reserves the right to modify these Terms of Service at any time. We will notify users of any significant changes through email or notifications on the 
                website. Continued use of the services after such modifications constitute your agreement to the updated terms.
              </p>
            </section>

            <section>
              <h2 className="bold-head">11. Contact Information</h2>
              <p className="bold">
                If you have any questions about these Terms, please contact AIBC.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
import "./TermsAndService.scss";

export default TermsAndService;
