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
            solutionImg: '../../assets/images/Solutions-Page.png ',
          };
          this.igaData = {
            solutionHdng: 'Solve key Identity Governance & Administration challenges',
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
                bContent: `Effortlessly integrate new users into your ecosystem with precision and speed.`
              },
              {
                bHdng: `Airtight Access Controls`,
                bContent: `Enjoy the peace of mind that comes with robust role-based access controls, tailored to your organization's unique needs.`
              },
              {
                bHdng: `Strategic Advantage`,
                bContent: `Transform identity management from a compliance necessity into a strategic advantage, aligning it with your organizational goals.`
              },
              {
                bHdng: `Enhanced Security Posture`,
                bContent: `IGA enhances security by managing identities and access, reducing the impact of insider threats and external attacks on sensitive data. `
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
                info: ``
              },
              {
                title: `User Provisioning and Deprovisioning`,
                info: ``
              },
              {
                title: `Access Certiﬁcation`,
                info: ``
              },
              {
                title: `Certify User Access`,
                info: ``
              },
              {
                title: `Access Request`,
                info: ``
              },
              {
                title: `Segregation of Duties (SOD)`,
                info: ``
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
            solutionImg: '../../assets/images/Solutions-Page.png '
          };
          this.igaData = {
            solutionHdng: 'Solve key Identity Governance & Administration challenges',
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
                bContent: `Craft seamless and secure user onboarding experiences, minimizing friction, and maximizing security.`
              },
              {
                bHdng: `Secure SSO Experiences`,
                bContent: `Elevate trust with centralized access and robust authentication, ensuring a secure and user-friendly Single Sign-On process.`
              },
              {
                bHdng: `Valuable Insights`,
                bContent: `Gain invaluable insights into user behavior through sophisticated analytics, enhancing your understanding of customer interactions.`
              },
              {
                bHdng: `Personalized User Experiences`,
                bContent: `Tailor interactions based on behavioral analytics, creating personalized and engaging experiences that foster customer loyalty.`
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
                info: ``
              },
              {
                title: `Identity proofing`,
                info: ``
              },
              {
                title: `SSO (Single Sign On)`,
                info: ``
              },
              {
                title: `Single Portal Access all the applications`,
                info: ``
              },
              {
                title: `MFA (Multi factor Authentication)`,
                info: ``
              },
              {
                title: `Preference Management`,
                info: ``
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
            solutionImg: '../../assets/images/Solutions-Page.png '
          };
          this.igaData = {
            solutionHdng: 'Solve key Identity Governance & Administration challenges',
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
                bContent: `Mitigate risks with precisely-timed privileged access, ensuring that access is granted only when needed.`
              },
              {
                bHdng: `Comprehensive Session Management`,
                bContent: `Record and manage sessions efficiently, enhancing visibility and accountability.`
              },
              {
                bHdng: `Efficient Least Privilege`,
                bContent: `Redefine access by enforcing least privilege measures, minimizing potential attack surfaces.`
              },
              {
                bHdng: `Proactive Security Measures`,
                bContent: `Anticipate and address potential security risks before they escalate, ensuring a proactive defense strategy.`
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
                info: ``
              },
              {
                title: `Session Recording &Management`,
                info: ``
              },
              {
                title: `Least Privilege and End Point Protection`,
                info: ``
              },
              {
                title: `Secret Management`,
                info: ``
              },
              {
                title: `Application Privileged Account Management (APAM)`,
                info: ``
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
            solutionImg: '../../assets/images/Solutions-Page.png '
          };
          this.igaData = {
            solutionHdng: 'Solve key Identity Governance & Administration challenges',
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
                bContent: `Simplify access with seamless Single Sign-On, reducing the complexity of multiple credentials.`
              },
              {
                bHdng: `Fortified Multi-Factor Authentication`,
                bContent: `Strengthen security with robust authentication, ensuring only authorized users gain access.`
              },
              {
                bHdng: `Efficient Policy Management`,
                bContent: `Navigate access policies with finesse and efficiency, ensuring a balance between security and user convenience.`
              },
              {
                bHdng: `User Convenience Optimization`,
                bContent: `Optimize user experience by balancing security measures with streamlined access, promoting a user-friendly environment.`
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
                info: ``
              },
              {
                title: `MFA`,
                info: ``
              },
              {
                title: `Federation (SAML/0Auth/Open ID Connect)`,
                info: ``
              },
              {
                title: `Policy Management`,
                info: ``
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
