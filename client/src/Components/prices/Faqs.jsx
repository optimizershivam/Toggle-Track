import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
  import {
    Box,
    Button,
    Divider,
    Flex,
    Stack,
    Text,
    Image,
    Input,
  } from "@chakra-ui/react";
const Faqs = () => {
  return <Box bg="#412a4c" textAlign={"center"}>
        <Box mt={{ lg: "80px"}} w={{ lg: "70%" ,md:"85%"}} m="auto" >
        <Text fontSize={{ lg: "48px",base:"30px" }} color="#e57cd8"  mt={{base:"60px"}} pt="30px">
          FAQS
        </Text>
        <Box>
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            textAlign={"left"}
            mt={{ lg: "20px",base:"20px"}}
          >
            <AccordionItem>
              <h2>
                <AccordionButton fontSize={{ lg: "24px",base:"17px",md:"19" }} p={{ lg: "30px",md:"20px",base:"20px"  }}>
                  <Box flex="1" textAlign="left" ml={{ lg: "-12px" }}>
                    Is Toggl Track free for an unlimited number of users?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={{ lg: "15.36px" ,base:"14px",md:"15" }}>
                Toggl Track is free for teams of up to 5 members.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize={{ lg: "24px" ,base:"17px",md:"19"  }} p={{ lg: "30px",md:"20px" ,base:"20px"  }}>
                  <Box flex="1" textAlign="left" ml={{ lg: "-12px" }}>
                    How is the subscription fee calculated for paid plans?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={{ lg: "15.36px" ,base:"14px",md:"15" }}>
                You will be charged a monthly fee for each member of your team.
                For paid plans, this fee applies even if you have under 5 active
                users. You will not be charged for deactivated users. If you
                deactivate a user, all data associated with the deactivated user
                will be retained.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize={{ lg: "24px" ,base:"17px",md:"19px" }} p={{ lg: "30px" ,md:"20px" ,base:"20px" }}>
                  <Box flex="1" textAlign="left" ml={{ lg: "-12px" }}>
                    You mentioned that Toggl Track is free for up to 5 users. If
                    I’m on a paid plan, do I only need to pay for the 6th user?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={{ lg: "15.36px" ,base:"14px" ,md:"15"}}>
                No, you will have to pay for all 6 members on your plan. We
                charge for every user because all users benefit from the extra
                features enabled by paid plans, not just the 6th. For example,
                all users can create Tasks or assign entries as Billable—all
                paid plan features.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize={{ lg: "24px" ,base:"17px",md:"19px" }} p={{ lg: "30px",md:"20px" ,base:"20px"  }}>
                  <Box flex="1" textAlign="left" ml={{ lg: "-12px" }}>
                    Does Toggl Track offer discounts?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={{ lg: "15.36px"  ,base:"14px",md:"15"}}>
                Yes, Toggl Track offers discounts for nonprofits, students, and
                educational institutions. Visit this page to see if you can
                qualify. For those who do not qualify, Toggl Track offers a
                volume discount for large teams if you purchase a yearly
                subscription.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize={{ lg: "24px" ,base:"17px" ,md:"19" }} p={{ lg: "30px",md:"20px" ,base:"20px"  }}>
                  <Box flex="1" textAlign="left" ml={{ lg: "-12px" }}>
                    It keeps taking me to a page where it says I’m signing up
                    for a trial of Premium. I’d just like to sign up for a Free
                    plan.
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={{ lg: "15.36px"  ,base:"14px",md:"15"}}>
                Regardless of the plan, all new users get to try out our Premium
                features for free—for 30 days. You will not be asked to provide
                any billing information. When the 30 days are up, you’ll
                automatically lose access to the Premium features, but you can
                continue using Track on the Free plan.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize={{ lg: "24px" ,base:"17px",md:"19"  }} p={{ lg: "30px" ,md:"20px",base:"20px"  }}>
                  <Box flex="1" textAlign="left" ml={{ lg: "-12px" }}>
                    If I sign up for a Free plan but add 6 users to my Workspace
                    during my free Premium trial, what will happen to the 6th
                    user once the 30 days are up?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={{ lg: "15.36px" ,base:"14px",md:"15" }}>
                All users will remain in the Workspace and all time tracking
                data will remain intact. However, once you’re back on the Free
                plan, the Workspace will be frozen and no one will be able to
                track time. To unfreeze the Workspace, reduce the number of
                active users to 5.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize={{ lg: "24px" ,base:"17px" ,md:"19" }} p={{ lg: "30px" ,md:"20px",base:"20px"  }}>
                  <Box flex="1" textAlign="left" ml={{ lg: "-12px" }}>
                    If I use your Premium features during the trial, what
                    happens to all the data related to paid features (Tasks,
                    Billable Rates, etc.) once my Workspace downgrades to the
                    Free plan?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={{ lg: "15.36px"  ,base:"14px",md:"15"}}>
                The data entered during the trial will be hidden, but not
                removed or deleted. If you upgrade to a paid plan sometime in
                the future, the data will become visible again. All the time
                entries will remain visible—only the associated data from paid
                features such as Tasks will be hidden.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize={{ lg: "24px"  ,base:"17px",md:"19" }} p={{ lg: "30px" ,md:"20px" ,base:"20px" }}>
                  <Box flex="1" textAlign="left" ml={{ lg: "-12px" }}>
                    Does Toggl Track have desktop or mobile apps? Are they free?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={{ lg: "15.36px" ,base:"14px",md:"15" }}>
                Yes, we’re on desktop and mobile. We have desktop apps for
                Windows and macOS, and mobile apps for iOS and Android. All of
                our apps are free to download and use.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton fontSize={{ lg: "24px" ,base:"17px" ,md:"19" }} p={{ lg: "30px" ,md:"20px",base:"20px"  }}>
                  <Box flex="1" textAlign="left" ml={{ lg: "-12px" }}>
                    If I have a paid Toggl Plan subscription, do I need to pay
                    for Toggl Track?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={{ lg: "15.36px" ,base:"14px",md:"15" }}>
                Your Toggl Plan subscription will not influence your Toggl Track
                payment plan. You will need to sign up for a separate Toggl
                Track account even if you have a Toggl Plan account, and you
                will be billed separately according to the Toggl Track plan
                you’re on. If you have a paid Toggl Plan subscription, you can
                take advantage of the Toggl Plan and Track integration to track
                time within Plan.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
  </Box>;
};

export default Faqs;
