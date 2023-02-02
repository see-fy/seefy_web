import React from "react";
import { serverTimestamp } from "firebase/firestore";

const data = [
  //************************************************* */44444444444444444444444444
  // {
  //   title: "Depression",
  //   age: 24,
  //   job: "Developper",
  //   location: "Massachussets, USA",
  //   fullname: "Mary Swarchz",
  //   username: "ejalonah",
  //   type: "oqd1Nx3HjZhtv8Jj8tAe2hIqNsu2",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   gender: "Male",
  //   admin: true,
  //   cover:
  //     "https://cdn.pixabay.com/photo/2018/05/27/20/48/sadness-3434515__340.jpg",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Feeling sad or hopeless - Loss of interest in things once enjoyed - Difficulty concentrating",
  //   description:
  //     "Depression is a mental disorder characterized by persistent sadness and a loss of interest in activities.",
  // },
  // {
  //   title: "Anxiety Disorder",
  //   age: 24,
  //   job: "Developper",
  //   location: "Massachussets, USA",
  //   fullname: "Mary Swarchz",
  //   username: "ejalonah",
  //   type: "oqd1Nx3HjZhtv8Jj8tAe2hIqNsu2",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   gender: "Male",
  //   admin: true,
  //   cover:
  //     "https://cdn.pixabay.com/photo/2021/07/02/11/54/free-fall-6381571__340.jpg",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Feeling nervous or uneasy - Excessive worry - Physical symptoms such as a rapid heartbeat",
  //   description:
  //     "Anxiety disorder is a mental health condition characterized by persistent, excessive fear or worry.",
  // },
  // {
  //   title: "Post-Traumatic Stress Disorder (PTSD)",
  //   age: 24,
  //   job: "Developper",
  //   location: "Massachussets, USA",
  //   fullname: "Mary Swarchz",
  //   username: "ejalonah",
  //   type: "oqd1Nx3HjZhtv8Jj8tAe2hIqNsu2",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   gender: "Male",
  //   admin: true,
  //   cover:
  //     "https://cdn.pixabay.com/photo/2017/01/22/16/56/ambulance-2000195__340.jpg",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Intrusive memories of traumatic events-Avoidance of triggers-Feeling on edge",
  //   description:
  //     "Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event.",
  // },
  // {
  //   title: "Bipolar Disorder",
  //   age: 24,
  //   job: "Developper",
  //   location: "Massachussets, USA",
  //   fullname: "Mary Swarchz",
  //   username: "ejalonah",
  //   type: "oqd1Nx3HjZhtv8Jj8tAe2hIqNsu2",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   gender: "Male",
  //   admin: true,
  //   cover:
  //     "https://cdn.pixabay.com/photo/2014/09/02/11/26/chains-433541__340.jpg",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Extreme mood swings-Periods of depression and mania-Impaired judgment",
  //   description:
  //     "Bipolar disorder is a mental health condition characterized by dramatic shifts in mood, energy, and activity levels.",
  // },
  // {
  //   title: "Schizophrenia",
  //   age: 24,
  //   job: "Developper",
  //   location: "Massachussets, USA",
  //   fullname: "Mary Swarchz",
  //   username: "ejalonah",
  //   type: "oqd1Nx3HjZhtv8Jj8tAe2hIqNsu2",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   gender: "Male",
  //   admin: true,
  //   cover:
  //     "https://images.unsplash.com/photo-1553465528-5a213ccc0c7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U2NoaXpvcGhyZW5pYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Hallucinations and delusions-Disordered thinking-Flat affect (lack of emotional expression)",
  //   description:
  //     "Schizophrenia is a serious mental health condition characterized by a loss of contact with reality.",
  // },
  // *************************************************************************1111111111
  {
    title: "Obsessive-Compulsive Disorder (OCD)",
    age: 23,
    job: "Salesman",
    location: "London, UK",
    fullname: "Eliza Scarlet",
    username: "scarduk",
    type: "R9965fCZ3IRMldLfZZ0aDdpsVQZ2",
    profilePic:
      "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    gender: "Female",
    admin: true,
    cover:
      "https://images.unsplash.com/photo-1602421251215-2b217c83402f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fE9ic2Vzc2l2ZSUyMENvbXB1bHNpdmUlMjBEaXNvcmRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    timestamp: serverTimestamp(),
    symptoms:
      "Obsessions (intrusive thoughts)-Compulsions (repetitive behaviors)-Intense anxiety",
    description:
      "Obsessive-compulsive disorder (OCD) is a mental health condition characterized by repetitive thoughts and behaviors.",
  },
  {
    title: "Eating Disorder",
    age: 23,
    job: "Salesman",
    location: "London, UK",
    fullname: "Eliza Scarlet",
    username: "scarduk",
    type: "R9965fCZ3IRMldLfZZ0aDdpsVQZ2",
    profilePic:
      "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    gender: "Female",
    admin: true,
    cover:
      "https://images.unsplash.com/photo-1543250903-0eaa21ef14b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8RWF0aW5nJTIwRGlzb3JkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    timestamp: serverTimestamp(),
    symptoms:
      "Distorted body image-Preoccupation with food and weight-Extreme weight changes",
    description:
      "Eating disorders are a group of mental health conditions characterized by disordered eating habits.",
  },
  {
    title: "Borderline Personality Disorder",
    age: 23,
    job: "Salesman",
    location: "London, UK",
    fullname: "Eliza Scarlet",
    username: "scarduk",
    type: "R9965fCZ3IRMldLfZZ0aDdpsVQZ2",
    profilePic:
      "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    gender: "Female",
    admin: true,
    cover:
      "https://images.unsplash.com/photo-1638657605264-61ebcdf9255d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fEJvcmRlcmxpbmUlMjBQZXJzb25hbGl0eSUyMERpc29yZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    timestamp: serverTimestamp(),
    symptoms:
      "Intense, unstable emotions-Impulsive and reckless behavior-Fears of abandonment",
    description:
      "Borderline personality disorder (BPD) is a mental health condition characterized by an ongoing pattern of instability in relationships, self-image, and emotions.",
  },
  {
    title: "Generalized Anxiety Disorder",
    age: 23,
    job: "Salesman",
    location: "London, UK",
    fullname: "Eliza Scarlet",
    username: "scarduk",
    type: "R9965fCZ3IRMldLfZZ0aDdpsVQZ2",
    profilePic:
      "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    gender: "Female",
    admin: true,
    cover:
      "https://images.unsplash.com/photo-1633144167821-5f80bfda5d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fEdlbmVyYWxpemVkJTIwQW54aWV0eSUyMERpc29yZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    timestamp: serverTimestamp(),
    symptoms:
      "Excessive and unrealistic worry-Restlessness or feeling keyed up-Difficulty focusing",
    description:
      "Generalized Anxiety Disorder (GAD) is a mental health condition characterized by excessive, unrealistic worry and tension.",
  },
  {
    title: "Social Anxiety Disorder",
    age: 23,
    job: "Salesman",
    location: "London, UK",
    fullname: "Eliza Scarlet",
    username: "scarduk",
    type: "R9965fCZ3IRMldLfZZ0aDdpsVQZ2",
    profilePic:
      "https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    gender: "Female",
    admin: true,
    cover:
      "https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsJTIwQW54aWV0eSUyMERpc29yZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    timestamp: serverTimestamp(),
    symptoms:
      "Intense fear of social situations-Self-consciousness-Avoidance of social situations",
    description:
      "Social Anxiety Disorder, also known as social phobia, is a mental health condition characterized by an intense fear of social situations.",
  },
  // *******************************************************************************2222
  // {
  //   title: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
  //   age: 22,
  //   job: "Student",
  //   location: "Paris, France",
  //   fullname: "Julie Lescron",
  //   username: "testym",
  //   type: "2vet2F7qdKOVMdHh68k9zAFez1V2",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   gender: "Male",
  //   admin: true,
  //   cover:
  //     "https://images.unsplash.com/photo-1533536347418-0d36ef3aedd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fEF0dGVudGlvbiUyMERlZmljaXQlMkZIeXBlcmFjdGl2aXR5JTIwRGlzb3JkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   timestamp: serverTimestamp(),
  //   symptoms: "Difficulty paying attention-Impulsiveness-Hyperactivity",
  //   description: "Attention-deficit/hyperactivity disorder (ADHD) is",
  // },
  // {
  //   title: "Panic Disorder",
  //   age: 22,
  //   job: "Student",
  //   location: "Paris, France",
  //   fullname: "Julie Lescron",
  //   username: "testym",
  //   type: "2vet2F7qdKOVMdHh68k9zAFez1V2",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   gender: "Male",
  //   admin: true,
  //   cover:
  //     "https://images.unsplash.com/photo-1616004662309-51fc58c168cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fFBhbmljJTIwRGlzb3JkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Sudden and intense fear-Physical symptoms such as chest pain, rapid heartbeat-Fear of losing control or dying",
  //   description:
  //     "Panic disorder is a mental health condition characterized by recurring panic attacks.",
  // },
  // {
  //   title: "Seasonal Affective Disorder (SAD)",
  //   age: 22,
  //   job: "Student",
  //   location: "Paris, France",
  //   fullname: "Julie Lescron",
  //   username: "testym",
  //   type: "2vet2F7qdKOVMdHh68k9zAFez1V2",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   gender: "Male",
  //   admin: true,
  //   cover:
  //     "https://images.unsplash.com/photo-1607920592519-bab4d7db727d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8U2Vhc29uYWwlMjBBZmZlY3RpdmUlMjBEaXNvcmRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Feeling sad or hopeless-Loss of energy-Changes in appetite or sleep",
  //   description:
  //     "Seasonal affective disorder (SAD) is a type of depression that is related to the change of seasons, typically occurring during the fall and winter months.",
  // },
  // {
  //   title: "Dissociative Identity Disorder (DID)",
  //   age: 22,
  //   job: "Student",
  //   location: "Paris, France",
  //   fullname: "Julie Lescron",
  //   username: "testym",
  //   type: "2vet2F7qdKOVMdHh68k9zAFez1V2",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1438762398043-ac196c2fa1e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   gender: "Male",
  //   admin: true,
  //   cover:
  //     "https://images.unsplash.com/photo-1655557937610-32eee4f6c5df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fERpc3NvY2lhdGl2ZSUyMElkZW50aXR5JTIwRGlzb3JkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Feeling detached from oneself-Multiple distinct identities-Gaps in memory",
  //   description:
  //     "Dissociative identity disorder (DID) is a condition in which a person has more than one distinct identity or personality.",
  // },
  // **********************************************************************3333333333333333
  // {
  //   title: "Narcissistic Personality Disorder",
  //   age: 24,
  //   job: "Data Scientist",
  //   location: "Mississipy, USA",
  //   fullname: "Tahmaris Shah",
  //   username: "tahmerym",
  //   type: "1Z3UsbpJAeMvzgEjQquwoUvUNk53",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1502919280275-1bed9aca68ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   gender: "Female",
  //   admin: true,
  //   cover:
  //     "https://images.unsplash.com/photo-1546554303-9b8f4684a1ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fE5hcmNpc3Npc3RpYyUyMFBlcnNvbmFsaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Exaggerated sense of self-importance-Preoccupation with fantasies of power and success-Lack of empathy for others",
  //   description:
  //     "Narcissistic Personality Disorder (NPD) is a mental health condition characterized by a pervasive pattern of grandiosity, a need for admiration and a lack of empathy.",
  // },
  // {
  //   title: "Obsessive-Compulsive Personality Disorder (OCPD)",
  //   age: 24,
  //   job: "Data Scientist",
  //   location: "Mississipy, USA",
  //   fullname: "Tahmaris Shah",
  //   username: "tahmerym",
  //   type: "1Z3UsbpJAeMvzgEjQquwoUvUNk53",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1502919280275-1bed9aca68ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   gender: "Female",
  //   admin: true,
  //   cover:
  //     "https://images.unsplash.com/photo-1597897964095-0a996559a9ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8T2JzZXNzaXZlJTIwQ29tcHVsc2l2ZSUyMFBlcnNvbmFsaXR5JTIwRGlzb3JkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Preoccupation with perfectionism-Inflexibility-Inability to relax",
  //   description:
  //     "Obsessive-compulsive personality disorder (OCPD) is a personality disorder characterized by a preoccupation with perfectionism, inflexibility, and a inability to relax.",
  // },
  // {
  //   title: "Avoidant Personality Disorder",
  //   age: 24,
  //   job: "Data Scientist",
  //   location: "Mississipy, USA",
  //   fullname: "Tahmaris Shah",
  //   username: "tahmerym",
  //   type: "1Z3UsbpJAeMvzgEjQquwoUvUNk53",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1502919280275-1bed9aca68ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   gender: "Female",
  //   admin: true,
  //   cover:
  //     "https://images.unsplash.com/photo-1487753665987-9499e0fb4415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fEF2b2lkYW50JTIwUGVyc29uYWxpdHklMjBEaXNvcmRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //   timestamp: serverTimestamp(),
  //   symptoms: "Feeling socially inept-Fear of criticism-Shyness",
  //   description:
  //     "Avoidant personality disorder is a mental health condition characterized by a pervasive pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation.",
  // },
  // {
  //   title: "Depersonalization-Derealization Disorder",
  //   age: 24,
  //   job: "Data Scientist",
  //   location: "Mississipy, USA",
  //   fullname: "Tahmaris Shah",
  //   username: "tahmerym",
  //   type: "1Z3UsbpJAeMvzgEjQquwoUvUNk53",
  //   profilePic:
  //     "https://images.unsplash.com/photo-1502919280275-1bed9aca68ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFnaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   gender: "Female",
  //   admin: true,
  //   cover:
  //     "https://images.unsplash.com/photo-1609041958269-fc44467d925d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fERlcGVyc29uYWxpemF0aW9uJTIwRGVyZWFsaXphdGlvbiUyMERpc29yZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   timestamp: serverTimestamp(),
  //   symptoms:
  //     "Feeling detached from oneself-Feeling detached from reality-Emotion disresonance",
  //   description:
  //     "Depersonalization-derealization disorder is a condition characterized by feelings of detachment from one's self and surroundings, including an altered sense of reality, and an inability to fully experience emotions.",
  // },
];

export default data;
