import { Link } from "react-router-dom";
import Layout from "../components/Layout";


export default function PrivacyPolicy() {
    return (
        <Layout title="Privacy Policy">
            <div className="pageHeaderContainer">
                <div className="pageHeader legalContent">
                    <h1>Privacy Policy</h1>
                    <p>1. Introduction<br />
                        Kindsettle.com ("Website", "Service", "we", "us", "our") committed to protecting the privacy of our users ("User", "you", "your").
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. If you do
                        not agree with the terms of this policy, please do not access the site.</p>

                    <p>2. Information Collection<br />
                        We collect information that you provide directly to us when you register, use our services, or communicate with us. This may include:
                        <ul>
                            <li>Personal Identification Information: Full name, email address, mailing address, and telephone number.</li>
                            <li>Financial Information: Bank account details, payment card numbers, and other related billing details.</li>
                        </ul>
                    </p>

                    <p>3. Information Use<br />
                        We use the information collected in various ways, including to:
                        <ul>
                            <li>Provide, operate, and maintain our website.</li>
                            <li>Improve, personalize, and expand our website.</li>
                            <li>Understand and analyze how you use our website.</li>
                            <li>Develop new products, services, features, and functionality.</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates
                                and other information relating to the website, and for marketing and promotional purposes.</li>
                            <li>Process your transactions.</li>
                            <li>Find and prevent fraud.</li>
                        </ul></p>

                    <p>4. Information Sharing and Disclosure<br />
                        We may share the information we collect in various ways, including the following:
                        <ul>
                            <li>Vendors and Service Providers: We may share your information with third-party vendors and service providers that provide services on our
                                behalf, such as payment processing and data analysis.</li>
                            <li>Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities
                                (e.g., a court or a government agency).</li>
                        </ul></p>

                    <p>5. Cookies and Tracking Technologies<br />
                        We use cookies and similar tracking technologies to track the activity on our website and store certain information. Tracking technologies
                        used are beacons, tags, and scripts to collect and track information and to improve and analyze our service.</p>

                    <p>6. Third-Party Websites<br />
                        Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that
                        third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>

                    <p>7. Security of Your Information<br />
                        We take the security of your information seriously and use appropriate technical and organizational measures to protect your personal data from
                        loss, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>

                    <p>8. Children’s Privacy<br />
                        Our service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone
                        under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.</p>

                    <p>9. Changes to This Privacy Policy<br />
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are
                        advised to review this Privacy Policy periodically for any changes.</p>

                    <p>10. Contact Us<br />
                        If you have any questions about this Privacy Policy, You can contact us by email at <Link to="mailto:info@kindsettle.com">info@kindsettle.com</Link>.</p>

                </div>
            </div>
        </Layout>
    );
}
