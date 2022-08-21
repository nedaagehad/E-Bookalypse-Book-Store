
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './PrivacyPolicy.module.css'

export default function PrivacyPolicy() {

    const theme = useSelector((state) => state.theme.currentTheme);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, []);

    return (
        <div className={`container-fluid content p-3 ${theme === "night" ? "bg-dark" : "bg-white"}`}>
            <div className={`container p-5`}>
                <h3 className={`mb-3 text-decoration-underline fw-bold ${styles.mov}`}>Privacy Policy</h3>
                <div className={theme === "night" ? "text-light" : "text-dark"}>
                    <p>
                        E-Bookalypse knows that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and wisely.
                        This Privacy Policy explains how E-Bookalypse, as data controller, collects, uses and shares personal information in association with the services we
                        provide through our Platform, including the E-Bookalypse e-Reading service and the account you use to access our Services. By visiting and using this website,
                        you are accepting the practices described in this Privacy Policy.
                    </p>
                    <h6 className='fw-bold'>WHEN DO WE COLLECT YOUR PERSONAL DATA?</h6>
                    <p>
                        We collect, process and use your personal information when you register for an E-Bookalypse account or log into an existing account;
                        order products or digital content from us; access the E-Bookalypse Platform or use the E-Bookalypse Services; or contact us for customer care.
                        The information we collect is typically related to the product or service you request and include your name and title; address and email address;
                        the nature of the product or service requested; payment information, and all related information which we may need to fulfill your request.
                    </p>

                    <h6 className='fw-bold'>WHY DO WE COLLECT YOUR PERSONAL DATA?</h6>
                    <p>
                        We collect your personal information to create and manage your E-Bookalypse Account; monitor and manage your purchase transactions;
                        comply with legal and regulatory requirements and with the competent judicial authorities in each geographical jurisdiction that E-Bookalypse operates in; maintain,
                        support and develop the products and services you purchase; and perform statistical analysis. We also use your information to assess risk and detect and prevent fraud.
                        Any fraudulent misuse of your E-Bookalypse Account or Platform may result in the suspension or cancellation of your Account.
                        we may also use your personal information, and after your permission to send you newsletter and marketing e-mails providing you with the most up-to-date information about our services,
                        products, and other information that might be of interest to you when using services from E-Bookalypse and/or our affiliates and partners; to offer you more personalized offers and/or
                        special offers, discounts and other information, E-Bookalypse may send you discounts, promotion codes, and general information about our society.
                    </p>

                    <h6 className='fw-bold'>HOW DO WE PROTECT YOUR PERSONAL DATA?</h6>
                    <p>
                        We deploy administrative, technical, and physical safeguards designed to safeguard the information that we collect. We evaluate these safeguards on an ongoing basis to help minimize risks
                        from new security threats as they become known. We work to protect the security of your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts
                        information you input. We reveal only the last four digits of your credit card numbers when confirming an order. Of course, we transmit the entire credit card number to the appropriate
                        credit card company during order processing. It is important for you to protect against unauthorized access to your password and to your computer. Be sure to sign off when finished using
                        a shared computer.
                    </p>

                    {/* <h6 className='fw-bold'>WHY DO WE USE COOKIES?</h6>
                <p>
                    We use cookies like most companies, for a variety of purposes to enhance your online experience and to provide services and features you have specifically requested. We may use cookies and tracking technologies for system administration and/or to allow you to remember your log-in status,
                    and to make use of shopping-cart functionality. We are not required to obtain your consent for cookies that are strictly necessary. We may also use cookies to assess the performance of our Services,
                    including as part of our analytics practices to improve the selection of content recommended to you through the Services; to tell us, for example,
                    whether you have visited the Services before or if you are a new visitor and to help us identify the features in which you may have the greatest interest;
                    to deliver content, including ads, relevant to your interests on our Services.
                    By using our Services, you consent to the use of cookies and tracking technologies and the corresponding processing of information. You can withdraw your consent at any time by deleting placed cookies and disabling cookies in your browser.

                    WHY DO WE SHARE YOUR PERSONAL DATA TO A THIRD PARTY?

                    We may share the information we collect, including your personal information, with third parties like our service providers and business partners that perform marketing services and other business operations on our behalf and under our instructions. For example,
                    we may partner with other companies to process secure payments, fulfill orders, optimize E-Poets Society Services, send our newsletters and marketing emails, support email and messaging services and analyze information.
                    We may also share the information we collect, including personal information, with law enforcement or to otherwise comply with any statutory or regulatory requirement or the order of a court or other public authority agency,
                    regulator, government authority or other third party where we believe this is necessary to comply with a legal or regulatory obligation, or otherwise to protect our rights or the rights of any third party.

                    If you choose to visit and/or use e-poetssociety.com, your visit and any dispute over privacy is subject to this Policy and our Terms of Use, including limitations on damages, resolution of disputes, and application of the Lebanese law.
                    If you have any concern about privacy at e-poetssociety.com, please contact us with a thorough description, and we will try to resolve it. Our business changes constantly, and our Privacy
                    Policy and the Terms of Use will change also. We may e-mail periodic reminders of our Policies and Terms, but you should check our Web site frequently to see recent changes. Unless stated otherwise, our current Privacy Policy applies to all information that we have about you and your account.
                    We stand behind the promises we make, however, and will never materially change our policies and practices to make them less protective of customer information collected in the past without the consent of affected customers.
                </p> */}
                </div>
            </div>
        </div>
    )
}
