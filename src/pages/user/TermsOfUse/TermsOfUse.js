
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import navbar from '../../../components/NavBar/NavBar.module.css';

function TermsOfUse() {

    const theme = useSelector((state) => state.theme.currentTheme);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className={`container-fluid p-3 ${theme === "night" ? "bg-dark" : ""}`}>
            <div className='container p-5 rounded-5 shadow bg-light'>
                <h3 className='mb-3 text-decoration-underline fw-bold'>Terms Of Use</h3>
                <p>
                    <b>PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THIS WEBSITE. BY USING THIS WEBSITE,
                        YOU AGREE TO THESE TERMS OF USE. IF YOU DO NOT AGREE TO THESE TERMS OF USE,
                        PLEASE DO NOT USE THIS WEBSITE.</b>
                </p>
                <p>
                    Welcome to E-Bookalypse, an online service operating in the MENA region and the World, that provides users with access to discover, purchase,
                    and read literary works from its international society of authors and content providers. By registering, accessing or using the Service you signify
                    that you have read, understood and agreed to be bound by these Terms of Use, whether or not you are a Customer of the Service. You are only authorized
                    to use the Service if you agree to abide by all applicable laws and with this Agreement. E-Bookaylpse reserves the right, at its sole discretion, to change,
                    modify, add, or delete portions of these Terms of Use at any time without further notice, but will sure post the changes to these terms and conditions on the Service.
                    However, your continued use of the Service after any such changes constitutes your acceptance of the revised terms and conditions.
                </p>
                <p>
                    If you do not comply with this Agreement at any time, E-Bookalypse reserves the right to immediately cancel or terminate your access to the Service and/or your Customer account,
                    if any. You agree that any termination or cancellation of your access to, or use of, the Service may be effected without prior notice. If you do not abide by the terms of this Agreement,
                    you agree that we may immediately deactivate or delete your Customer account, if any, and all related information and files in your user account. Further, you agree that E-Bookalypse
                    shall not be liable to you or any third-party for any termination or cancellation of your access to, or use of, the Service. You acknowledge that your only right with respect to any
                    dissatisfaction with any modification or discontinuation of or to the Service, or any policies or practices by E-Bookalypse in providing the Service, including without limitation any
                    change in content, is to cease using the Service and cancel or terminate your subscription or Customer account, as applicable.
                </p>
                <p>
                    <b>ELECTRONIC COMMUNICATIONS:</b>&nbsp;
                    When you use E-Bookalypse Services, or send e-mails, text messages, and other communications from your desktop or mobile device to us, you may be communicating with us electronically.
                    You consent to receive communications from us electronically, such as e-mails, texts, mobile push notices, or notices and messages on this site, and you can retain copies of these
                    communications for your records. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that
                    such communications be in writing.
                </p>
                <p>
                    <b>COPYRIGHT:</b>&nbsp;
                    All literary works on the Service (each, “Digital Content”) are the exclusive property of E-Bookalypse or its content suppliers and protected by international copyright laws. The
                    download of, and access to any Digital Content is available only to Customers and is intended only for such Customers’ personal and non-commercial use. Any other use of Digital
                    Content downloaded or accessed from the Service is strictly prohibited. Customers may not modify, transmit, publish, participate in the transfer or sale of, reproduce, create
                    derivative works from, distribute, perform, display, record, or in any way exploit, any of the content of any Digital Content, in whole or in part. By downloading or otherwise
                    accessing Digital Content from the Service, the Customer hereby acknowledges and agrees to these terms.
                </p>
                <p>
                    <b>PAYMENT METHODS:</b>&nbsp;
                    Only Customers may purchase Digital Content on the Service, pay for publishing related services fees, as well as for Quotes related gift items displayed on our Store. When a credit card
                    is being used for a purchase, E-Bookalypse may obtain a pre-approval from the credit card company for an amount up to the amount of the order. Billing to the credit card occurs at the
                    time of purchase, or shortly thereafter. You will also receive through e-mail an immediate receipt bill from our banking system notifying you of a successful transaction and thanking
                    you for your purchase.
                </p>
                <p>
                    <b>LICENSE:</b>&nbsp;
                    Subject to your compliance with these Terms of Use and any Service conditions, and your payment of any applicable fees, E-Bookalypse or its content providers grant you a limited,
                    non-exclusive, non-transferable license to access and make personal and non-commercial use of the company's Services. This license does not include any resale or commercial use of
                    any E-Bookalypse Service, or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of any E-Bookalypse Service or its contents;
                    any downloading, copying, recording or other use of account information for the benefit of any third party; or any use of data mining, robots, or similar data gathering and extraction
                    tools. All rights not expressly granted to you in these Terms of Use or any Service conditions are reserved and retained by E-Bookalypse or its licensors, suppliers, publishers,
                    rights holders, or other content providers. No E-Bookalypse Product or Service, may be reproduced, duplicated, copied, recorded, sold, resold, visited, or otherwise exploited for any
                    commercial purpose without express written consent of E-Bookalypse or its content providers. You may not frame or utilize framing techniques to enclose any trademark, logo, or other
                    proprietary information (including images, text, page layout, or form) of E-Bookalypse without express written consent. The licenses granted by E-Bookalypse terminate if you do not
                    comply with these Terms of Use or any Service Conditions.
                </p>
                <p>
                    <b>YOUR ACCOUNT:</b>&nbsp;
                    You may need your own E-Bookalypse account to use certain Services, and you may be required to be logged in to the account and have a valid payment method associated with it.
                    You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account, and you agree to accept responsibility for all
                    activities that occur under your account or password. E-Bookalypse reserves the right to refuse service, terminate accounts, terminate your rights to use its Services, remove or
                    edit content, or cancel orders in its sole discretion. Your account offers you the ability to access, view, purchase, download, store, read and listen to Digital Content on the
                    Customer’s Devices from within the Customer’s account while utilizing E-Bookalypse website and/or application. It also allows unlimited storage of Digital Content purchased or
                    downloaded via the Customer’s account on E-Bookalypse's Library, which can be accessed at all times when the Customer is logged into their account and using E-Bookalypse Website
                    and/or application.
                </p>
                <p>
                    If you are a Customer then you agree to provide true, accurate, current and complete information about yourself as prompted by any registration form(s) on the Service, including
                    your geographical location and billing address (the "Registration Data"); If you provide any information that is untrue, inaccurate, not current or incomplete, E-Bookalypse has
                    the right to suspend or terminate your account and refuse any and all current or future use of the Service (or any portion thereof); you also agree to immediately notify E-Bookalypse
                    of any unauthorized use of your password or account or any other breach of security; and ensure that you exit from your account at the end of each session.
                </p>
                <p>
                    <b>RESTRICTIONS ON USE:</b>&nbsp;
                    All content on the Service, including but not limited to designs, text, graphics, pictures, video, information, applications, software, music, audio and other files, and their selection
                    and arrangement ("Site Content"), are the property of E-Bookalypse or its licensors with all rights reserved. No Site Content may be modified, copied, distributed, framed, reproduced,
                    republished, downloaded, displayed, posted, recorded, transmitted, or sold in any form or by any means, in whole or in part, without E-Bookalypse's prior written permission. Provided
                    that you are eligible for use of the Service and subject to these Terms of Use, you are granted a limited license to access the Service and the Site Content and to download or print a
                    copy of any portion of the Site Content to which you have properly gained access solely for your personal, non-commercial use, provided that you keep all copyright and other proprietary
                    notices intact. You may not upload or republish Site Content on any Internet, Intranet or Extranet site or incorporate the information in any other database or compilation, and any other
                    use of the Site Content is strictly prohibited. The foregoing license is subject to these Terms of Use and does not include use of any data mining, robots or similar data gathering or
                    extraction methods. Any use of the Service or the Site Content other than as specifically authorized herein, without the prior written permission of E-Bookalypse, is strictly prohibited
                    and will terminate the license granted herein. Such unauthorized use may also violate applicable laws including without limitation copyright and trade-mark laws and applicable
                    communications regulations and statutes. Unless explicitly stated herein, nothing in these terms and conditions shall be construed as conferring any license to intellectual property
                    rights, whether by estoppel, implication or otherwise. This license is revocable by E-Bookalypse at any time without notice and with or without cause.
                </p>
                <p>
                    You shall not upload, post or otherwise make available on the Service any material protected by copyright, trademark or other proprietary right without the express permission of the
                    owner of the copyright, trademark or other proprietary right and the burden of determining that any material is not protected by copyright rests with you. You shall be solely liable for
                    any damage resulting from any infringement of copyrights, proprietary rights, or any other harm resulting from such a submission. By submitting material to any public area of the Service,
                    you automatically grant, or warrant that the owner of such material has expressly granted E-Bookalypse the royalty-free, worldwide, perpetual, irrevocable, non-exclusive right and license
                    to use, reproduce, modify, adapt, publish, display, translate and distribute such material (in whole or in part) and/or to incorporate it in other works in any form, media or technology
                    now known or hereafter developed. You also permit any other user of the Service to access, view, store or reproduce the material for that user's personal use. You grant E-Bookalypse the
                    right to edit, copy, display, publish and distribute any material made available on the Service by you. The foregoing does not apply to literary works provided to E-Bookalypse for sale
                    on the Service by a publisher or other content provider. You are prohibited from violating or attempting to violate the security of the Service, including, without limitation: accessing
                    data not intended for you, including logging into a server or account which you not authorized to access; attempting to probe, scan or test the vulnerability of a system or network to
                    breach security or authentication measures without proper authorization; using any "deep-link", "page-scrape", "robot", "spider" or other automatic device, program, algorithm or
                    methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Service or any Site Content, or in any way reproduce or circumvent the
                    navigational structure or presentation of the Service or any Site Content, to obtain or attempt to obtain any materials, documents or information through any means not purposely made
                    available through the Site; taking any action that imposes an unreasonable or disproportionately large load on the infrastructure of the Service or E-Bookalypse's systems or networks, or
                    any systems or networks connected to the Service or to E-Bookalypse's; conducting a reverse look-up, tracing or seeking to trace any information on any other user, Customer or visitor to
                    the Service, or any other customer of E-Bookalypse, to its source, or exploit the Service or any service or information made available or offered by or through the Service, in any way
                    where the purpose is to reveal any information, including but not limited to personal identification or information, other than your own information, as provided for by the Service;
                    attempting to interfere with, disrupt or disable service to any user, host or network, including, without limitation, via means of "denial of service" attacks, overloading, "flooding",
                    "mailbombing" or "crashing"; taking any action in order to obtain services to which you are not entitled.
                </p>
                <p>
                    <b>DISCLAIMER OF WARRANTY:</b>&nbsp;
                    You expressly agree that use of the website is at your sole risk. Neither E-Bookalypse, its affiliates, nor any of their respective employees, agents, third party content providers or
                    licensors warrant that the site will be uninterrupted or error free; nor do they make any warrant as to the results that may be obtained from use of the website, or as to the accuracy or
                    reliability of any information, service or merchandise provided through the website.
                </p>
                <p>
                    In no event will E-Bookalypse, or any person or entity involved in creating, producing or distributing the website or the content included therein, be liable in contract, or under any
                    other legal theory for any damages, direct, indirect, incidental, punitive, consequential or similar damages, including , without limitation, lost profits or revenues, loss of use or
                    similar economic loss, arising out of the use of or inability to use the website.
                </p>
                <p>
                    This disclaimer of liability applies to any damages, injury and loss caused by any failure of performance, error, omission, inaccuracy, interruption, deletion, defect, delay in operation
                    or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of this website, whether for breach of contract,
                    negligence, or under any other cause of action. You specifically acknowledge that E-Bookalypse is not liable for the defamatory, offensive or illegal conduct of other users or third
                    parties and that the risk of injury from the foregoing rests entirely with you.
                </p>
                <p>
                    <b>SELF-PUBLISHING MONITORING:</b>&nbsp;
                    E-Bookalypse shall have the right, but not the obligation, to monitor the content of the Service, to determine compliance with these Terms of Use and any operating rules established by
                    E-Bookalypse and to satisfy any law, regulation or authorized government request. E-Bookalypse shall have the right in its sole discretion to edit, refuse to post or remove any material
                    submitted to or posted on the Service, and awaiting for approval. Without limiting the foregoing, E-Bookalypse shall have the right to remove any material that the company in its sole
                    discretion, finds to be in violation of the provisions hereof, its CONTENT POLICY, or otherwise objectionable. Although E-Bookalypse reserves the right to remove, without notice, any
                    posting for any reason, E-Bookalypse has no obligation to delete submissions that you may find objectionable or offensive.
                </p>
                <p>
                    <b>INDEMNIFICATION:</b>&nbsp;
                    You agree to defend, indemnify and hold harmless E-Bookalypse and its affiliates and their respective directors, officers, employees and agents from and against any and all claims,
                    actions, demands, damages, costs, liabilities, losses and expenses (including reasonable attorneys' fees) arising out of your use of the Service.
                </p>
                <p>
                    <b>TRADEMARKS:</b>&nbsp;
                    E-Bookalypse, and related words, domain names and logos are trade-marks and the property of E-Bookalypse. All other trade-marks, product names and company names or logos cited herein are
                    the property of their respective owners.
                </p>
                <p>
                    <b>THIRD PARTY CONTENT:</b>&nbsp;
                    Any opinions, advice, statements, services, offers, or other information or content expressed or made available by third parties, including content providers and users, are those of the
                    respective author(s) or distributor(s) and not of E-Bookalypse. In many instances, the content available through the Service represents the opinions and judgments of the respective
                    content provider or user. E-Bookalypse neither endorses nor is responsible for the accuracy or reliability of any content, opinion, advice or statement made on the Service by anyone
                    other than authorized E-Bookalypse employee spokespersons while acting in their official capacities.
                </p>
                <p>
                    <b>DISPUTES:</b>&nbsp;
                    By using any E-Bookalypse Service, you agree that the Egyptian courts will have exclusive jurisdiction over any dispute arising out of or related to our site. These Terms of Use, as well 
                    as any disputes or claims arising out of or relating to them or the subject matter of these Terms or their formation (including non-contractual disputes or claims) shall be governed by 
                    and construed in accordance with the Egyptian law.
</p>
<p>
                    If you have any concerns about the information and the points listed in our Terms of Use, please <Link to='/contactus' className={`text-decoration-none fw-bold ${navbar.navItem}`}>Contact Us</Link>
                </p>
            </div>
        </div>
    )
}

export default TermsOfUse