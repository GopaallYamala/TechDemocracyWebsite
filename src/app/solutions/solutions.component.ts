import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor(private readonly activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      if (query.prop)
        this.navToPages(query.prop);
    });
  }

  navToPages(title?: any) {
    if (title) {
      switch (title) {
        case 'Identity Governance & Administration':
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Unlocking Secure Access:',
            subHeading: 'Automate compliance and protect your enterprise against threats.',
            solutionName: 'Identity Governance Solutions',
            solutionContent: 'Our Identity Governance Administration (IGA) solutions serve as the bedrock of a resilient digital identity ecosystem, ensuring that businesses can navigate the complexities of identity management with confidence and precision..',
            solutionImg: '../../assets/images/heroimages/SolutionheroImgSample.png',
          };
          this.igaData = {
            solutionHdng: 'Solve key Identity Governance and Administration challenges',
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
            content: `We recognize that the intricate dance between user access, compliance, and security is more crucial than ever and need these capabilities:`,
            featuresObj: [
              {
                title: `Identity life cycle management`,
                info: `Identity lifecycle management ensures secure and compliant user access, covering creation, modification, and deactivation throughout their association with an organization.`,
                icon: `../../assets/images/Icons/Icon__Identity life cycle management.svg`
              },
              {
                title: `User Provisioning and Deprovisioning`,
                info: `Automated user provisioning and deprovisioning streamline access management, ensuring efficient and secure control over user privileges.`,
                icon: `../../assets/images/Icons/Icon__User Provisioning and Deprovisioning.svg`
              },
              {
                title: `Access Certiﬁcation`,
                info: `Verify and approve user access rights, ensuring alignment with security policies and compliance standards, enhancing governance and control.`,
                icon: `../../assets/images/Icons/Icon__Access Certiﬁcation.svg`
              },
              {
                title: `Certify User Access`,
                info: `Certify user access to validate alignment with security policies, ensuring compliance and strengthening overall governance and control.`,
                icon: `../../assets/images/Icons/Icon__Certify User Access.svg`
              },
              {
                title: `Access Request`,
                info: `Initiate access requests to obtain permissions, streamlining user access while adhering to security policies and compliance requirements`,
                icon: `../../assets/images/Icons/Icon__Access Request.svg`
              },
              {
                title: `Segregation of Duties (SOD)`,
                info: `Segregation of Duties (SoD) enforces separation among conflicting tasks, preventing potential conflicts and reducing the risk of fraud or errors.`,
                icon: `../../assets/images/Icons/Icon__Segregation of Duties (SOD).svg`
              }
            ]
          }
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
            solutionHdng: 'Solve key Identity Governance and Administration challenges',
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
                title: `User registration`,
                info: `Efficient user registration in Customer Identity & Access Management (CIAM) ensures seamless onboarding, prioritizing security and user experience.`,
                icon: `../../assets/images/Icons/Icon__User registration.svg`
              },
              {
                title: `Identity proofing`,
                info: `In CIAM, identity proofing ensures robust user authentication, bolstering security measures and fostering trust in digital interactions.`,
                icon: `../../assets/images/Icons/Icon__Identity proofing.svg`
              },
              {
                title: `SSO (Single Sign On)`,
                info: `CIAM's SSO streamlines user access, offering a secure and seamless experience by allowing authentication across multiple services with a single login.`,
                icon: `../../assets/images/Icons/Icon__SSO (Single Sign On).svg`
              },
              {
                title: `Single Portal Access all the applications`,
                info: `Streamline user experience with CIAM's single portal, granting access to all applications for a unified and efficient interaction.`,
                icon: `../../assets/images/Icons/Icon__Single Portal Access all the applications.svg`
              },
              {
                title: `MFA (Multi factor Authentication)`,
                info: `In CIAM, MFA adds an extra layer of security by requiring users to provide multiple authentication factors, ensuring robust protection and access control.`,
                icon: `../../assets/images/Icons/Icon__MFA (Multi factor Authentication).svg`
              },
              {
                title: `Preference Management`,
                info: `In CIAM, preference management empowers users to customize their settings, fostering personalized and user-centric experiences for enhanced satisfaction and engagement.`,
                icon: `../../assets/images/Icons/Icon__Preference Management.svg`
              }
            ]
          };
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
            solutionHdng: 'Solve key Identity Governance and Administration challenges',
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
                icon: `../../assets/images/Icons/Icon__Credential Vaulting & Password Management (Just in-Time).svg`
              },
              {
                title: `Session Recording &Management`,
                info: `PAM's session recording and management track and monitor privileged user activities, enhancing security, compliance, and incident response capabilities.`,
                icon: `../../assets/images/Icons/Icon__Session Recording &Management.svg`
              },
              {
                title: `Least Privilege and End Point Protection`,
                info: `Least privilege and endpoint protection in PAM bolster security by limiting access and fortifying endpoints against potential threats effectively.`,
                icon: `../../assets/images/Icons/Icon__Least Privilege and End Point Protection.svg`
              },
              {
                title: `Secret Management`,
                info: `PAM's secret management safeguards sensitive information, ensuring secure storage, controlled access, and compliance with robust security protocols.`,
                icon: `../../assets/images/Icons/Icon__Secret Management.svg`
              },
              {
                title: `Application Privileged Account Management (APAM)`,
                info: `APAM secures and manages privileged accounts tied to applications, thwarting unauthorized access and ensuring adherence to security policies effectively.`,
                icon: `../../assets/images/Icons/Icon__Application Privileged Account Management (APAM).svg`
              },
            ]
          };
          break;
        case `Access Management`:
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Unlocking Secure Access:',
            subHeading: 'Automate compliance and protect your enterprise against threats.',
            solutionName: 'Access Management',
            solutionContent: "TechDemocracy's Access Management (AM) solutions rise to the occasion, not just as gatekeepers but as architects of a secure, user-friendly access experience.",
            solutionImg: '../../assets/images/heroimages/Privileged_Access_Management.png'
          };
          this.igaData = {
            solutionHdng: 'Solve key Identity Governance and Administration challenges',
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
                bHdng: `Fortified Multi-Factor Authentication`,
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
                icon: `../../assets/images/Icons/Icon__Single Sign-On.svg`
              },
              {
                title: `MFA`,
                info: `MFA enhances security by requiring users to provide multiple forms of identification, bolstering access management beyond traditional password measures.`,
                icon: `../../assets/images/Icons/Icon__MFA.svg`
              },
              {
                title: `Federation (SAML/0Auth/Open ID Connect)`,
                info: `Federation with SAML, OAuth, and OpenID Connect enables secure and seamless user authentication and authorization across various systems in access management.`,
                icon: `../../assets/images/Icons/Icon__Federation (SAML-0Auth-Open ID Connect).svg`
              },
              {
                title: `Policy Management`,
                info: `Policy Management enforces rules on user permissions, ensuring adherence to security policies and regulatory requirements for effective access control governance.`,
                icon: `../../assets/images/Icons/Icon__Policy Management.svg`
              }
            ]
          };
          break;
        case `Manage SOC`:
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Cyber Security',
            subHeading: 'An essential to secure digital business',
            solutionName: 'Operations Center',
            solutionContent: "Cyber Security Operations Center encompasses Technologies, Processes and People to defend IT, OT/ICT infrastructure like data, applications, assets and networks from cyber attacks. It is required to enable best cyber resilience by providing situational awareness, real-time alerting, swift incident response and decisive remediations",
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
            theQsn: `Why choose TechDemocracy for Manage SOC?`,
            theAns: `Enterprises seeking AM solutions desire more than a simplistic access control mechanism—they seek a partner capable of simplifying Single Sign-On complexities, fortifying multi-factor authentication, and navigating the intricacies of policy management with finesse.`
          };
          this.potentialDiffDataObj = {
            hdng: `Our Solutions and portfolio`,
            content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero`,
            featuresObj: [
              {
                title: `Managed SOC with aiXDR`,
                info: `(SIEM+SOAR+UEBA+NBAD/NTA+TI+IDS/IPS+ML+AI+VA+EDR: Comprehensive Cybersecurity for Digital-Era) a holistic approach to cybersecurity by gathering deep insights from endpoints, servers, clouds, network devices, applications, IOT, and OT and applying user identity, threat intelligence, and vulnerability assessment to establish threat profiles, generate threat indicators, raise essential alerts, and offer remediation path – automated or triaged.`,
                icon: `../../assets/images/Icons/Icon__Managed SOC with aiXDR.svg`
              },
              {
                title: `Managed SOC with aiSIEM`,
                info: `(SIEM+SOAR+UEBA+NBAD/NTA+TI+IDS/IPS+ML+AI: Comprehensive Cybersecurity for Digital-Era) aiSIEM platform augments and automates security services with our AI and ML powered solutions. It delivers continuous coverage by collecting telemetry from logs, identity management, networks, endpoints, clouds and applications.`,
                icon: `../../assets/images/Icons/Icon__Managed SOC with aiSIEM.svg`
              },
              {
                title: `Cyber Advisory Services`,
                info: `Threat and security assessment Secure business strategies, products, and services. Support business growth by providing comprehensive security risk. A deep understanding of your business priorities enables us to provide strategic advice and a ‘secure by design’ approach. With our expertise and experience, we efficiently and flexibly assist our clients in the planning and implementation of their security programs`,
                icon: `../../assets/images/Icons/Icon__Cyber Advisory Services.svg`
              },
              {
                title: `Integrated Threat Management (Common threat intelligence + Threat Hunting)`,
                info: `ITM is a security approach that consolidates different security components into a single platform or application for an enterprise IT architecture. ITM evolved as a response to increasingly complex and frequent malicious attacks by hackers and others intent on damaging systems. ITM solutions address different types of attacks, such as malware and spam.`,
                icon: `../../assets/images/Icons/Icon__Integrated Threat Management.svg`
              }
            ]
          };
          break;
        default:
          break;
      }
    }
  }
}
