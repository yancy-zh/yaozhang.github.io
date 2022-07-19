import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    // {
    //   id: 1,
    //   title: 'Read data from Google spreadsheet in Angular',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/MyShop/#/',
    //   githurl: 'https://github.com/mehulk05/MyShop',
    //   mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
    //   imgUrl: 'assets/images/z1.png',
    //   tech: 'Angular 10 , Google SpreadsheetApi'
    // },

  ]
  about2 = `high stand industrial project experience with Java 3 years, Python 3 years .
   Specialized in Data Analytics and Visualization, Computer Vision .
    delivered software for the IOT edge computing products for over 5 years  .
    familiar with the industrial 4.0 standards and telecommunication system architecture .
     working proficiency for English`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://pan.baidu.com/s/1EVqUWZPI-fgQWIRtsdPVxg?pwd=1234"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '70%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '50%'
    },
    {
      'id': '4',
      'skill': 'SQL, MYSQL, MONOGO, PostgreSQL',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'JAVA EE',
      'progress': '70%'
    }
  ];


  educationData: any = [
//     {
//       'id': '1',
//       'from_to_year': '2015 - 2019',
//       'education': 'Bachelor\'s Degree',
//       'stream': 'Bachelor of Engineering',
//       'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
// Completed B.E in Computer Engineering with 9.54 CGPA.
// Won the Best Student Award 3 times for excellent Academic records at College.
// Maintained above 9.1 spi in every semester of college academic .`,
//       'institution': ''
//     }

  ];
  exprienceData: any = [
    {
      id: 8,
      company: 'ObjectiveIT GmbH',
      location: 'remote for Germany',
      timeline: 'August 2021 - now',
      role: 'Java backend Developer',
      work: `Technologies : Java EE, Elastic Search, Quarkus, AWS, Docker, Tomcat .
  Project description: development of web micro-service applications for a platform which offers the comparison, recommendation of common insurance services, such as health insurance, life insurance, family insurance, with the goal of converting traditional software structure to a web based, distributed system, and introducing integrated framework, light deployment cycle or mainstream tools .
  Contribution: I particularly was responsible for developing the car insurance module, dispatcher service, push service and tests design, biweekly deployment under devOps scheme, infrastructure discussion, technical support
  `
    },
    {
      id: 7,
      company: 'Huawei Technologies',
      location: 'Nuremberg, Germany',
      timeline: 'Nov 2020 - April 2021',
      role: 'Solution Designer and Software Engineer',
      work: `Technologies : C++, Java, Shell, Android OS, GANs(Generative adversarial networks), MobileNet .
  Project description: Key features outlined and technologies utilized}{Recover of the human face in the videos from a view of synthetic poses to the canonical view, Virtual assistant that integrates the voice recognition , audio-to-text, and nature language processing technologies, Region of Interest video encoding, perceptual based encoding/decoding .
  Contribution: provided business and technical solutions which include designing the key features of new products, research on the technologies and peers, algorithm evaluation,  migration of algorithms to chip code, software integration
  `
    },
    {
      id: 6,
      company: 'MyOmega Systems GmbH',
      location: 'Nuremberg, Germany',
      timeline: 'July 2017 - Sec 2018',
      role: 'System Engineer',
      work: `Technologies : Java - Telephony, socket.
  Project description: An android application to carry out Moderm/I2C/WIFI certification.
  `
    },
    {
      id: 5,
      company: 'MyOmega Systems GmbH',
      location: 'Nuremberg, Germany',
      timeline: 'Jan 2017 - June 2017',
      role: 'System Engineer',
      work: `Technologies : Java - Junit5, Spongycastle, Json, IO, Security, Net, Util .
  Project description: a program which test the full functionality of the gateway IO interfaces and hardware components, device registration, TPM secure boot, etc. (Java + android, C++) in the aspects of performance and functionality
.
Contribution: Developed the interfaces for registering the hardware
  `
    },
    {
      id: 4,
      company: 'MyOmega Systems GmbH',
      location: 'Nuremberg, Germany',
      timeline: 'Jan 2017 - June 2017',
      role: 'System Engineer',
      work: `Technologies : Java - Junit5, Spongycastle, Json, IO, Security, Net, Util .
  Project description: Functionality test and load tests. Created test cases inside the applications and for user management, thing management, hardware interfaces, TPM, Blockchain, in the aspects of performance and functionality
.
Contribution: Created test cases inside the applications and for user management, thing management, hardware interfaces, TPM, Blockchain, in the aspects of performance and functionality.
  `
    },

    {
      id: 3,
      company: 'MyOmega Systems GmbH',
      location: 'Nuremberg, Germany',
      timeline: 'Aug 2016 - Dec 2016',
      role: 'Software Engineer',
      work: `Technologies: Android System basics, Java - telephony, io.file, alarmManager, PackageManager, capillary, coap,  STL, net, IFC (Industrial fundamental classes), Postman, Shell, Batch, Bash, HTerm, DBForge .
  Project description : Android middleware utilities, including protocol simulation, and hardware regression tests (CPU load, TPM startup environment, communication interfaces wired-RS485, wirelesss-3GPP/Wifi/Capillary network), certification of high frequency modem for the gateway, WIFI configuration, etc. (Java, Android STL+ net + javaIO , Postman, Shell, Batch, Bash, PostgreSQL, HTerm, DBForge, IFC (Industrial fundamental classes))
  `
    },
    {
      id: 2,
      company: 'MyOmega Systems GmbH',
      location: 'Nuremberg, Germany',
      timeline: 'March 2016 - July 2016',
      role: 'Software Engineer',
      work: `Technologies: Java, Python, Tensorflow2.4, cuda, sklearn, Keras .
      designed image processing algorithms, framework to calculate the fill levels of containers from industrial logistics, wrote core libraries for the middleware in Android system (Java, Python), the Python scripts to generate the daily reports`
    },
    {
      id: 1,
      company: 'MyOmega Systems GmbH',
      location: 'Nuremberg, Germany',
      timeline: 'Sep 2015 - February 2016',
      role: 'Software Engineer',
      work: `Technologies: Angular, JavaSpring Boot , SQL. Apache Solr .
  Project description : This project is for developing layouts including hierarchical network, dynamic parallel plots, cylinder, forms, routing to visualize the measurements from the sensors, as well as the architecture of the IOT systemWorked on creating forms. I worked on user management page including personal info page with detailed task description, input forms and validation logic, and the component routing.
  `
    }

  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
