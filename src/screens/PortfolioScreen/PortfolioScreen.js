import React from 'react';
import { Paper } from '@material-ui/core'
import PortfolioRow from 'components/PortfolioRow/PortfolioRow'
import './PortfolioScreen.scss'

function PortfolioScreen() {
  return (
    <Paper className='root'>
      <PortfolioRow firstText={'My first programming project was Daylight, an Android app for reporting corrupt officials, particularly targeted toward Global South countries. Language: Java. Never released.'} firstLinkText={'Daylight'} firstLink={''} secondText={"Previous Personal Projects: Unnamed robot-control iOS app for startup called Pied Piper Robotics. It displayed a live-updating map of the robot's surroundings, supplied by a LIDAR scanner and processed in ROS. Language: Swift. Never released. In-progress mobile app for helping find specialized recipe ingredients. Stealth mode. Companies I've Worked At: Rex, a real estate / tech company with the goal of cutting agents and the MLS out of the home-buying and -selling process. A cutting-edge mobile app and website were important focuses of the company, and I worked on new features and fixed bugs for both during two internships there. Languages: React, React Native, CSS, HTML, JavaScript. Codagami, a mobile app- and website-building contracting business. I worked on the mobile app team, developing features and fixing bugs for the McDonald's iOS and Android apps in the Canada market. Languages: Swift, Java."} secondLinkText={'Placeholder!'} secondLink={''} thirdText={'Kashin, an international remittances app focused on the Vietnam market. The idea was for it to be an app for workers to send money home to their families, who live in other countries. I was the only iOS developer, building an app from nothing. Language: Swift. Never released.'} thirdLinkText={'Kashin'} thirdLink={''} />
    </Paper>
  )
}

export default PortfolioScreen
