import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AnimationDefinitions } from 'src/shared/animations';

@Component({
  selector: 'solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: AnimationDefinitions
})

export class SolutionsComponent implements OnInit {

  solutionData: any = {
    title: 'Our Solutions',
    heading: 'Unlocking Secure Access:',
    subHeading: 'Automate compliance and protect your enterprise against threats.',
    solutionName: 'Identity Governance Solutions',
    solutionContent: ' is at the center of IT operations, enabling and securing digital identities for all users, applications and data. Automating user lifecycle processes is critical for improving your operational efficiency, user experience and security posture, while reducing your risk and operational cost.',
    solutionImg: '../../assets/images/Solutions-Page.png ',
    displayBtn: true,
  };
  igaData: any = {
    solutionHdng: '',
    pointsList: []
  };
  challengesData: any = {
    qsnImportance: ``,
    importanceText: ``,
    benefits: [
      {
        bHdng: ``,
        bContent: ``
      },
      {
        bHdng: ``,
        bContent: ``
      },
      {
        bHdng: ``,
        bContent: ``
      },
      {
        bHdng: ``,
        bContent: ``
      }
    ]
  };
  whyChooseTDCDataObj: any = {
    theQsn: ``,
    theAns: ``
  };
  potentialDiffDataObj: any = {
    hdng: ``,
    content: ``,
    featuresObj: [
      {
        title: ``,
        info: ``
      }
    ]
  }
  title: any;
solutionType:string;

  constructor(private readonly activatedRoute: ActivatedRoute, 
    private readonly meta: Meta) {

  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      if (query.prop)
      this.solutionType = query.prop;
        this.navToPages(query.prop);
    });
    // this.meta.addTags([
    //   {name: 'title', content: "Delivery Center India - Cotelligent. Delivery Center United States - TechDemocracy. Delivery Center Canada. TechDemocracy Delivery Center Philippines | Get in touch with TechDemocracy"},
    //   { name: 'description', content: "Connect effortlessly with TechDemocracy’s delivery center in India using our contact Information or the inquiry submission form. Connect effortlessly with TechDemocracy’s delivery center in USA using our contact Information or the inquiry submission form. Connect effortlessly with TechDemocracy’s delivery center in Canada using our contact Information or the inquiry submission form. Connect effortlessly with TechDemocracy’s delivery center in Philippines using our contact Information or the inquiry submission form." },
    //   { name: 'keywords', content: "Contact information, Inquiry form, Contact details, Reach out, Inquiry submission, India office, Techdemocracy India, Cotelligent, enquiries, Contact form, Get connected, Customer support, Reach us, Connect with us. Techdemocracy delivery center, Canada delivery center, Contact information, Inquiry form, Contact details, Inquiry submission, Canada office, Techdemocracy Canada, enquiries, Contact form, Get connected, Customer support, Reach us, Connect with us, Contact support, Message us, Enquiry form, Customer service. Philippines office, Contact information, Inquiry form, Contact details, Reach out, Inquiry submission, enquiries, Get connected, Customer support, Reach us, Connect with us, Contact support, Message us, Enquiry form, TechdemocracyPhilippines" }]
    // );
  }

  navToPages(title?: any) {
    if (title) {
      switch (title) {
        case 'Identity Governance & Administration':
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Unlocking Secure Access:',
            subHeading: 'Automate compliance and protect your enterprise against threats',
            solutionName: 'Identity Governance Solutions',
            solutionContent: 'Our Identity Governance Administration (IGA) solutions serve as the bedrock of a resilient digital identity ecosystem, ensuring that businesses can navigate the complexities of identity management with confidence and precision.',
            solutionImg: '../../assets/images/heroimages/SolutionheroImgSample.png',
          };
          this.igaData = {
            solutionHdng: 'Key Identity Governance and Administration challenges',
            pointsList: [
              'Limited resources and budget constraints',
              'Complexity of IT environment ',
              'User resistance and change management'
            ]
          };
          this.challengesData = {
            qsnImportance: `Why is IGA important?`,
            importanceText: `In a rapidly evolving threat landscape, our IGA solution stands as a sentinel, fortifying organizations against potential risks, while also streamlining identity processes and ensuring adherence to compliance standards`,
            benefits: [
              {
                bHdng: `Streamlined Onboarding`,
                bContent: `Effortlessly integrate new users into your ecosystem with precision and speed.`,
                image: '../../assets/images/All_Solutions/Solutions__Streamlined Onboarding.svg'
              },
              {
                bHdng: `Airtight Access Controls`,
                bContent: `Enjoy the peace of mind that comes with robust role-based access controls, tailored to your organization's unique needs.`,
                image: '../../assets/images/All_Solutions/Solutions__Airtight Access Control.svg'
              },
              {
                bHdng: `Strategic Advantage`,
                bContent: `Transform identity management from a compliance necessity into a strategic advantage, aligning it with your organizational goals.`,
                image: '../../assets/images/All_Solutions/Solutions__Strategic Advantage.svg'
              },
              {
                bHdng: `Enhanced Security Posture`,
                bContent: `IGA enhances security by managing identities and access, reducing the impact of insider threats and external attacks on sensitive data. `,
                image: '../../assets/images/All_Solutions/Solutions__Enhanced Security Posture.svg'
              }
            ]
          };
          this.whyChooseTDCDataObj = {
            theQsn: `Why choose TechDemocracy for Identity and Governance Administration?`,
            theAns: `In a world inundated with diverse user roles and evolving compliance landscapes, businesses yearn for a partner who understands the nuanced needs of identity governance. TechDemocracy's IGA solutions resonate with organizations seeking more than just security—they crave a trusted ally that comprehensively addresses the intricacies of identity lifecycle management, robust access control, and a vigilant eye on compliance`
          };
          this.potentialDiffDataObj = {
            hdng: `IGA Features and Capabilities`,
            content: `We recognize that the intricate dance between user access, compliance, and security is more crucial than ever, and needs these capabilities`,
            featuresObj: [
              {
                title: `Identity Lifecycle Management `,
                info: `Identity lifecycle management ensures secure and compliant user access, covering creation, modification, and deactivation throughout their association with an organization.`,
                icon: `../../assets/images/Icons/IconIdentitylifecyclemanagement.svg`
              },
              {
                title: `User Provisioning and Deprovisioning`,
                info: `Automated user provisioning and deprovisioning streamline access management, ensuring efficient and secure control over user privileges.`,
                icon: `../../assets/images/Icons/IconUserProvisioningandDeprovisioning.svg`
              },
              {
                title: `Access Certiﬁcation`,
                info: `Verify and approve user access rights, ensuring alignment with security policies and compliance standards, enhancing governance and control.`,
                icon: `../../assets/images/Icons/IconAccessCertiﬁcation.svg`
              },
              {
                title: `Certify User Access`,
                info: `Certify user access to validate alignment with security policies, ensuring compliance and strengthening overall governance and control.`,
                icon: `../../assets/images/Icons/IconCertifyUserAccess.svg`
              },
              {
                title: `Access Request`,
                info: `Initiate access requests to obtain permissions, streamlining user access while adhering to security policies and compliance requirements`,
                icon: `../../assets/images/Icons/IconAccessRequest.svg`
              },
              {
                title: `Segregation of Duties (SOD)`,
                info: `Segregation of Duties (SoD) enforces separation among conflicting tasks, preventing potential conflicts and reducing the risk of fraud or errors.`,
                icon: `../../assets/images/Icons/IconSegregationofDuties.svg`
              }
            ]
          }
          this.meta.addTags([
            {name: 'title', content: "Identity Governance Solutions | IGA | Identity Management"},
            { name: 'description', content: "Explore cutting-edge Identity Governance Solutions: PIM, GRC, IAM, and Identity Analytics. Embrace a robust Identity Governance Framework for enhanced security." },
            { name: 'keywords', content: "Privileged Identity Management (PIM), Governance, Risk, and Compliance (GRC), Identity Analytics, Identity and Access Management (IAM), Identity Governance Framework" }]
          );
          break;
        case 'Customer Identity & Access Management':
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Unlocking Secure Access:',
            subHeading: 'Automate compliance and protect your enterprise against threats.',
            solutionName: 'Customer Identity & Access Management',
            solutionContent: "TechDemocracy's Customer Identity and Access Management (CIAM) solutions are crafted with a profound understanding that identities are not just data points but pivotal elements of trust-building in the digital realm.",
            solutionImg: '../../assets/images/heroimages/Customer_Identity_Access_Management.png'
          };
          this.igaData = {
            solutionHdng: 'Key Customer Identity & Access Management challenges',
            pointsList: [
              'Seamless Onboarding Complexity',
              'Identity Proofing Enhancement',
              'Behavior Analytics Integration'
            ]
          };
          this.challengesData = {
            qsnImportance: `Why is CIAM Important?`,
            importanceText: `Beyond the conventional realms of identity management, our CIAM elevates trust, offering secure SSO experiences, centralized access management, and robust multi-factor authentication, ensuring a secure and seamless user journey.`,
            benefits: [
              {
                bHdng: `Frictionless Registration`,
                bContent: `Craft seamless and secure user onboarding experiences, minimizing friction, and maximizing security.`,
                image: '../../assets/images/All_Solutions/Solutions__Enhanced Security Posture.svg'
              },
              {
                bHdng: `Secure SSO Experiences`,
                bContent: `Elevate trust with centralized access and robust authentication, ensuring a secure and user-friendly Single Sign-On process.`,
                image: '../../assets/images/All_Solutions/Solutions__Secure SSO Experiences.svg'
              },
              {
                bHdng: `Valuable Insights`,
                bContent: `Gain invaluable insights into user behavior through sophisticated analytics, enhancing your understanding of customer interactions.`,
                image: '../../assets/images/All_Solutions/Solutions__Valuable Insights.svg'
              },
              {
                bHdng: `Personalized User Experiences`,
                bContent: `Tailor interactions based on behavioral analytics, creating personalized and engaging experiences that foster customer loyalty.`,
                image: '../../assets/images/All_Solutions/Solutions__Personalized User Experiences.svg'
              }
            ]
          };
          this.whyChooseTDCDataObj = {
            theQsn: `Why choose TechDemocracy for CIAM?`,
            theAns: `At TechDemocracy, we recognize that organizations seeking CIAM solutions are not just looking for a way to manage user identities—they are on a quest for a solution that transforms user registration into a frictionless experience, fortifies identity proofing processes, and harnesses the power of user behavior analytics for personalized interactions.`
          };
          this.potentialDiffDataObj = {
            hdng: `CIAM features and capabilities`,
            content: ``,
            featuresObj: [
              {
                title: `User Registration `,
                info: `Efficient user registration in Customer Identity & Access Management (CIAM) ensures seamless onboarding, prioritizing security and user experience.`,
                icon: `../../assets/images/Icons/IconUserRegistration.svg`
              },
              {
                title: `Identity Proofing`,
                info: `In CIAM, identity proofing ensures robust user authentication, bolstering security measures and fostering trust in digital interactions.`,
                icon: `../../assets/images/Icons/IconIdentityproofing.svg`
              },
              {
                title: `SSO (Single Sign On)`,
                info: `CIAM's SSO streamlines user access, offering a secure and seamless experience by allowing authentication across multiple services with a single login.`,
                icon: `../../assets/images/Icons/IconSSO.svg`
              },
              {
                title: `Single Portal Access`,
                info: `Streamline user experience with CIAM's single portal, granting access to all applications for a unified and efficient interaction.`,
                icon: `../../assets/images/Icons/IconSinglePortalAccessalltheapplications.svg`
              },
              {
                title: `MFA (Multi factor Authentication)`,
                info: `In CIAM, MFA adds an extra layer of security by requiring users to provide multiple authentication factors, ensuring robust protection and access control.`,
                icon: `../../assets/images/Icons/IconMFAMultifactorAuthentication.svg`
              },
              {
                title: `Preference Management`,
                info: `In CIAM, preference management empowers users to customize their settings, fostering personalized and user-centric experiences for enhanced satisfaction and engagement.`,
                icon: `../../assets/images/Icons/IconPreferenceManagement.svg`
              }
            ]
          };
          this.meta.addTags([
            {name: 'title', content: "Customer Identity and Access Management | CIAM - TechDemocracy"},
            { name: 'description', content: "Discover techDemocracy’s Customer Identity and Access Management solutions, featuring PIM, GRC, IAM, and Identity Analytics." },
            { name: 'keywords', content: "Identity governance, IGA, Privileged Identity Management (PIM), Governance, Risk, and Compliance (GRC), Identity Analytics, Identity and Access Management (IAM), Identity Governance Framework, Identity Proofing Enhancement, Behavior Analytics Integration" }]
          );
          break;
        case `Previliged Access Management`:
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Unlocking Secure Access:',
            subHeading: 'Automate compliance and protect your enterprise against threats.',
            solutionName: 'Previliged Access Management',
            solutionContent: "TechDemocracy's Privileged Access Management (PAM) solutions are meticulously designed to not only secure critical assets but to redefine how organizations perceive and manage privileged access.",
            solutionImg: '../../assets/images/heroimages/Privileged_Access_Management.png'
          };
          this.igaData = {
            solutionHdng: 'Key Previliged Access Management challenges',
            pointsList: [
              'Balancing Privilege and Efficiency',
              'Session Visibility Enhancement',
              'Endpoint Protection Optimization'
            ]
          };
          this.challengesData = {
            qsnImportance: `Why is PAM Important?`,
            importanceText: `Our PAM solution transcends traditional privilege management by ensuring just-in-time access, robust session recording, and efficient endpoint protection. This approach provides a proactive defense against potential security risks.`,
            benefits: [
              {
                bHdng: `Just-in-Time Access`,
                bContent: `Mitigate risks with precisely-timed privileged access, ensuring that access is granted only when needed.`,
                image: '../../assets/images/All_Solutions/Solutions__Just in time Access.svg'

              },
              {
                bHdng: `Comprehensive Session Management`,
                bContent: `Record and manage sessions efficiently, enhancing visibility and accountability.`,
                image: '../../assets/images/All_Solutions/Solutions__Comprehensive Session management.svg'

              },
              {
                bHdng: `Efficient Least Privilege`,
                bContent: `Redefine access by enforcing least privilege measures, minimizing potential attack surfaces.`,
                image: '../../assets/images/All_Solutions/Solutions__Efficient Least Privilege.svg'

              },
              {
                bHdng: `Proactive Security Measures`,
                bContent: `Anticipate and address potential security risks before they escalate, ensuring a proactive defense strategy.`,
                image: '../../assets/images/All_Solutions/Solutions__Proactive Security Measures.svg'

              }
            ]
          };
          this.whyChooseTDCDataObj = {
            theQsn: `Why choose TechDemocracy for PAM?`,
            theAns: `Enterprises seeking PAM solutions are not merely looking for a tool to manage privileged credentials; they crave a partner that understands the nuances of least privilege, session management, and the intricate dance between securing critical data and maintaining operational efficiency, that’s where we step in.`
          };
          this.potentialDiffDataObj = {
            hdng: `PAM features and capabilities`,
            content: ``,
            featuresObj: [
              {
                title: `Credential Vaulting & Password Management (Just in-Time)`,
                info: `PAM ensures security with credential vaulting and just-in-time password management, minimizing exposure and enhancing privileged access controls effectively.`,
                icon: `../../assets/images/Icons/IconCredentialVaultingPasswordManagement.svg`
              },
              {
                title: `Session Recording & Management`,
                info: `PAM's session recording and management tracks and monitors privileged user activities, enhancing security, compliance, and, incident response capabilities.`,
                icon: `../../assets/images/Icons/IconSessionRecordingManagement.svg`
              },
              {
                title: `Least Privilege and End Point Protection`,
                info: `Least privilege and end point protection in PAM bolsters security by limiting access and fortifying end points against potential threats, effectively.`,
                icon: `../../assets/images/Icons/IconLeastPrivilegeandEndPointProtection.svg`
              },
              {
                title: `Secret Management`,
                info: `PAM's secret management safeguards sensitive information, ensuring secure storage, controlled access, and compliance with robust security protocols.`,
                icon: `../../assets/images/Icons/IconSecretManagement.svg`
              },
              {
                title: `Application Privileged Account Management (APAM)`,
                info: `APAM secures and manages privileged accounts tied to applications, thwarting unauthorized access and ensuring adherence to security policies effectively.`,
                icon: `../../assets/images/Icons/IconApplicationPrivilegedAccountManagement.svg`
              },
            ]
          };
          this.meta.addTags([
            {name: 'title', content: "Previliged Access Management (PAM) | Identity Security Solution"},
            { name: 'description', content: "Our Privileged Access Management solution transcends traditional privilege management by ensuring just-in-time access, robust session recording & reliable endpoint protection." },
            { name: 'keywords', content: "PAM, cyberthreats, Session Visibility Enhancement, Endpoint Protection Optimization, PAM solution,Proactive Security Measures, Credential Vaulting, Password Management, Application Privileged Account Management, APAM" }]
          );
          break;
        case `Access Management`:
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Unlocking Secure Access:',
            subHeading: 'Automate compliance and protect your enterprise against threats.',
            solutionName: 'Access Management',
            solutionContent: "TechDemocracy's Access Management (AM) solutions rise to the occasion, not just as gatekeepers but as architects of a secure, user-friendly access experience.",
            solutionImg: '../../assets/images/heroimages/AccessManagement.png'
          };
          this.igaData = {
            solutionHdng: 'Key Access Management challenges',
            pointsList: [
              'Single Sign-On Simplification',
              'Multi-Factor Authentication Enhancement',
              'Policy Management Efficiency'
            ]
          };
          this.challengesData = {
            qsnImportance: `Why is AM Important?`,
            importanceText: `Beyond access control, our AM simplifies Single Sign-On complexities, strengthens authentication with multi-factor methods, and streamlines policy management. This ensures not just secure access but also an optimized and user-friendly experience.`,
            benefits: [
              {
                bHdng: `Streamlined Single Sign-On`,
                bContent: `Simplify access with seamless Single Sign-On, reducing the complexity of multiple credentials.`,
                image: '../../assets/images/All_Solutions/Solutions__Streamlined Single Sign On.svg'

              },
              {
                bHdng: `Fortified MFA`,
                bContent: `Strengthen security with robust authentication, ensuring only authorized users gain access.`,
                image: '../../assets/images/All_Solutions/Solutions__Fortified MultiFactor Authentication.svg'
              },
              {
                bHdng: `Efficient Policy Management`,
                bContent: `Navigate access policies with finesse and efficiency, ensuring a balance between security and user convenience.`,
                image: '../../assets/images/All_Solutions/Solutions__Efficient Policy Management.svg'

              },
              {
                bHdng: `User Convenience Optimization`,
                bContent: `Optimize user experience by balancing security measures with streamlined access, promoting a user-friendly environment.`,
                image: '../../assets/images/All_Solutions/Solutions__User Convenience Optimization.svg'

              }
            ]
          };
          this.whyChooseTDCDataObj = {
            theQsn: `Why choose TechDemocracy for AM?`,
            theAns: `Enterprises seeking AM solutions desire more than a simplistic access control mechanism—they seek a partner capable of simplifying Single Sign-On complexities, fortifying multi-factor authentication, and navigating the intricacies of policy management with finesse.`
          };
          this.potentialDiffDataObj = {
            hdng: `AM features and capabilities`,
            content: ``,
            featuresObj: [
              {
                title: `Single Sign-On`,
                info: `SSO simplifies user access, enabling a single login for multiple applications, promoting convenience, and ensuring security in access management.`,
                icon: `../../assets/images/Icons/IconSingleSignOn.svg`
              },
              {
                title: `MFA`,
                info: `MFA enhances security by requiring users to provide multiple forms of identification, bolstering access management beyond traditional password measures.`,
                icon: `../../assets/images/Icons/IconMFA.svg`
              },
              {
                title: `Federation (SAML/0Auth/Open ID Connect)`,
                info: `Federation with SAML, OAuth, and OpenID Connect enables secure and seamless user authentication and authorization across various systems in access management.`,
                icon: `../../assets/images/Icons/IconFederationSAMLOAuthOpenIDConnect.svg`
              },
              {
                title: `Policy Management`,
                info: `Policy Management enforces rules on user permissions, ensuring adherence to security policies and regulatory requirements for effective access control governance.`,
                icon: `../../assets/images/Icons/IconPolicyManagement.svg`
              }
            ]
          };
          this.meta.addTags([
            {name: 'title', content: "Access Management Solutions | AM | Multi-Factor Authentication"},
            { name: 'description', content: "TechDemocracy's Access Management (AM) solutions rise to the occasion, not just as gatekeepers but as architects of a secure, user-friendly access experience." },
            { name: 'keywords', content: "AM solution, access control, policy management, Streamlined Single Sign-On, User Convenience Optimization, access control mechanism, Single Sign-On, MFA, SAML, Open ID Connect, TechDemocracy" }]
          );
          break;
        case `Manage SOC`:
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Cyber Security',
            subHeading: 'An essential to secure digital business',
            solutionName: 'Operations Center',
            solutionContent: "The Cyber Security Operations Center protects IT, OT/ICT infrastructure from cyber attacks, ensuring resilience through situational awareness, real-time alerting, swift incident response, and decisive remediation.",
            solutionImg: '../../assets/images/heroimages/Managed_SOC.png'
          };
          this.igaData = {
            solutionHdng: 'SOC Service Models',
            pointsList: [
              'Fully Managed SOC-as-a-Service',
              'Hybrid/Co-Managed SOC-as-a-Service',
              'Customized SOC Service'
            ]
          };
          this.challengesData = {
            qsnImportance: `Challenges in Cyber SOC`,
            importanceText: `Beyond access control, our AM simplifies Single Sign-On complexities, strengthens authentication with multi-factor methods, and streamlines policy management. This ensures not just secure access but also an optimized and user-friendly experience.`,
            benefits: [
              {
                bHdng: `Technology`,
                bContent: `Disconnected tools - Lack of automation and integration -Attackers increasingly “live off the land” and use techniques that won’t trigger individual security defenses.
                Security analysts workflow complexity – Investigate multiple tools and challenges in determining priority & remediation steps. Build play books and delayed response.
                Outdated detection - Attackers bypass defenses due to noisy, outdated, and ineffective detection mechanisms.`,
                image: '../../assets/images/All_Solutions/Solutions__Technology.svg'

              },
              {
                bHdng: `Process`,
                bContent: `Evolving threat landscape - Cybercriminals remain adept at successfully infiltrating organizations across the globe
                Process latency - Both environments and processes evolve faster than people’s understanding of them. So, processes lag the environment, and people lag the processes.
                Outdated detection - Attackers bypass defenses due to noisy, outdated, and ineffective detection mechanisms.`,
                image: '../../assets/images/All_Solutions/Solutions__Process.svg'

              },
              {
                bHdng: `People`,
                bContent: `Staffing, Skill and knowledge shortage – Knowledge shortage is closely related to skills shortage. Even those well versed in working all the systems management tools can fail if they know too little about the systems environment being protected.
                Struggle to keep up - Attackers use automation to overwhelm defenders, who have difficulty evaluating many fast-moving parts at once`,
                image: '../../assets/images/All_Solutions/Solutions__People.svg'

              }
            ]
          };
          this.whyChooseTDCDataObj = {
            theQsn: `Discover Why TechDemocracy is the Best Choice for Managing Your SOC`,
            theAns: `Enterprises seeking AM solutions desire more than a simplistic access control mechanism—they seek a partner capable of simplifying Single Sign-On complexities, fortifying multi-factor authentication, and navigating the intricacies of policy management with finesse.`
          };
          this.potentialDiffDataObj = {
            hdng: `Our Solutions and portfolio`,
            content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero`,
            featuresObj: [
              {
                title: `Managed SOC with aiXDR`,
                info: `(SIEM+SOAR+UEBA+NBAD/NTA+TI+IDS/IPS+ML+AI+VA+EDR: Comprehensive Cybersecurity for Digital-Era) is a holistic cybersecurity approach that considers user identity, threat intelligence, and vulnerability assessment to create threat profiles, generate threat indicators, raise critical alerts, and provide automated or triaged remediation paths.`,
                icon: `../../assets/images/Icons/IconManagedSOCwithaiXDR.svg`
              },
              {
                title: `Managed SOC with aiSIEM`,
                info: `With our AI and ML-powered solutions, the (SIEM+SOAR+UEBA+NBAD/NTA+TI+IDS/IPS+ML+AI: Comprehensive Cybersecurity for Digital-Era) aiSIEM platform enhances and automates security services. It provides continuous coverage by gathering telemetry from networks, endpoints, logs, identity management, clouds, and apps.`,
                icon: `../../assets/images/Icons/IconManagedSOCwithaiSIEM.svg`
              },
              {
                title: `Cyber Advisory Services`,
                info: `We are providing comprehensive security risk to support business growth. With a thorough comprehension of your company's goals, we can offer strategic counsel and a "secure by design" methodology. Our knowledge and experience help our clients develop and carry out their security initiatives effectively and adaptably.`,
                icon: `../../assets/images/Icons/IconCyberAdvisoryServices.svg`
              },
              {
                title: `Integrated Threat Management (Common Threat Intelligence + Threat Hunting)`,
                info: `In an enterprise IT architecture, ITM is a security strategy that combines many security elements into a single platform or application. ITM developed as a defense when hackers and other intruders became more skilled and regular in their attacks on systems. ITM solutions handle a variety of assaults, including spam and malware.`,
                icon: `../../assets/images/Icons/IconIntegratedThreatManagement.svg`
              }
            ]
          };
          this.meta.addTags([
            {name: 'title', content: "Manage SOC | TechDemocracy | Security Operations Center"},
            { name: 'description', content: "Secure your business with TechDemocracy’s Managed SOC services - expert monitoring and protection for your digital assets. Get peace of mind today!" },
            { name: 'keywords', content: "Cybersecurity, Threat detection, Incident response, Security monitoring Network defense, Security analysis, SIEM, Security Information and Event Management, Managed detection and response, MDR, Security alerts, Security protocols" }]
          );
          break;
        default:
          break;
      }
    }
  }
}
