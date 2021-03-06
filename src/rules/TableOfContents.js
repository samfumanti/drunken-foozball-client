import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Typography } from '@material-ui/core';

export default class TableOfContents extends Component {
  getChapters() {
    return this.props.rules.map((chapter, index) => {
      const chapterNumber = index + 1;
      return (
        <ul key={chapterNumber}>
          <li><Typography variant="h6">{`${chapterNumber}. ${chapter.chapterTitle}`}</Typography></li>
          {this.getSections(chapter, chapterNumber)}
        </ul>
      )
    })
  }

  getSections(chapter, chapterNumber) {
    return chapter.sections.map((section, index) => {
      const sectionNumber = `${chapterNumber}.${index + 1}`
      return (
        <Typography key={index} variant="body1">
          <Link to={sectionNumber} duration={1000} offset={-65} smooth>
            <span style={{cursor: 'pointer'}}>{`${sectionNumber}. ${section.sectionTitle}`}</span>
          </Link>
        </Typography>
      )
    })
  }

  render() {
    return this.getChapters();
  }
}
