import {
  chakra,
  Box,
  Image,
  Badge,
  StarIcon,
  Center,
  Wrap,
  WrapItem,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { m } from "framer-motion";

export default function AirbnbExample() {
  const property = {
    imageUrl:
      "https://lever-client-logos.s3.us-west-2.amazonaws.com/033213bf-8014-4a60-b76f-5dd0b3a3dcc3-1637169276358.png",
  };

  const resumeText = `Job Title: Full Stack Software Engineer

Job Location: San Francisco, CA / New York, NY

Company Name: Betterleap

Job Description: We are looking for a Full Stack Software Engineer interested in building engaging and insightful products. Some of the problems you will be solving, include but is not limited to:

Creating new visualizations and interfaces for data flow that can scale with Apache Kafka

Enabling growth through experimentation and analysis to build a world-class onboarding experience

Building and managing monitoring, configuration, control plane, and operational services to allow our customers to manage their infrastructure in the cloud

Weâ€™re actively hiring for various engineering teams such as Growth, Kafka Platform, Data Governance, Data Exchange, Kafka Connect, etc and we are open to all levels like Software engineer, Senior Software Engineer, Staff engineer etc.

Hiring Manager: Shamoon Siddiqui - shamoon@betterleap.com

Min Comp:100000

Max Comp:200000

Posted Date: 11/11/2021

About: At Betterleap, our mission is to help the most innovative companies find talent, in any specialization and location, while empowering recruiters all over the world to grow their businesses. We believe there are too many barriers to starting a recruiting business, and weâ€™re designing tools and infrastructure to help our recruiters start, run, and scale an online recruiting business from anywhere in the world.

Job Category: Engineering

Recruiters: Long Phan - long@betterleap.com, Khaled Hussein - khaled@betterleap.com,Anna Melano - anna@betterleap, Tony Tan - tony@betterleap.com

Skills: ReactJS,TypescriptJS,NestJS,PostresSql,HTML & CSS,API Development,Database Design, TypeORM, AWS web services,TDD

Qualifications: 3+ years of experience in full-stack software engineering. Strong understanding of server/client technologies, RESTful APIs, and software/database architecture. Experience with git, unit testing, continuous deployment practices, code review, and agile sprints.`;

  const resumeKeys = [
    "Job Title:",
    "Job Location:",
    "Company Name:",
    "Job Description:",
    "Hiring Manager:",
    "Min Comp:",
    "Max Comp:",
    "Posted Date:",
    "About:",
    "Job Category:",
    "Recruiters:",
    "Skills:",
    "Qualifications:",
  ];

  const resume = {};

  resumeKeys.forEach((elt, index) => {
    const firstKey = resumeKeys[index];
    const secondKey = resumeKeys[index + 1];
    const start = resumeText.indexOf(firstKey) + firstKey.length;
    let end = resumeText.indexOf(secondKey);
    if (end < 0) {
      end = resumeText.length - 1;
    }
    resume[elt] = resumeText.substring(start, end).trim();
  });

  const skillsProcessed = resume["Skills:"].split(",").map(function (item) {
    return item.trim();
  });

  resumeKeys.splice(resumeKeys.indexOf("Skills:"), 1);
  delete resume["Skills:"];

  return (
    <Box margin={100}>
      <Center>
        <Box
          boxShadow="xl"
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Center>
            <Box margin={50}>
              <Image src={property.imageUrl} alt={property.imageAlt} />
            </Box>
          </Center>

          <Box p="6" textAlign={"justify"}>
            {resumeKeys.map((key) => (
              <>
                <Box marginLeft={25} marginRight={25}>
                  <Heading as="h3" size="lg">
                    {key.split(":")[0]}
                  </Heading>
                  <Text fontSize="sm">{resume[key]}</Text>
                  <Box margin="3">
                    <Divider />
                  </Box>
                </Box>
              </>
            ))}

            <Box marginLeft={25} marginRight={25}>
              <Heading as="h3" size="lg">
                Skills required
              </Heading>
              <Box margin="4" display="flex" alignItems="baseline">
                <Wrap>
                  {skillsProcessed.map((skill) => (
                    <WrapItem>
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        {`${skill}`}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
