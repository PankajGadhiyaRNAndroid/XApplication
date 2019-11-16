import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import styles from './StyleDetail';
const defaultImg = require('../../images/download.png');


export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: props.details
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.maincontainer}>
        <View style={styles.maincontainer}>
          {
            this.state.article &&
            <ScrollView>
              <View style={styles.contentcontainer}>
                <Image
                  style={styles.roundimage}
                  source={defaultImg}
                />
                <Text style={styles.contentlabel}>Title</Text>
                <Text style={styles.contenttextcontainer}>{this.state.article.title}</Text>

                <Text style={styles.contentlabel}>Abstract</Text>
                <Text style={styles.contenttextcontainer}>{this.state.article.abstract}</Text>

                <Text style={styles.contentlabel}>Publish Date</Text>
                <Text style={styles.contenttextcontainer}>{this.state.article.published_date}</Text>

                <Text style={styles.contentlabel}>Type</Text>
                <Text style={styles.contenttextcontainer}>{this.state.article.type}</Text>

                <Text style={styles.contentlabel}>Source</Text>
                <Text style={styles.contenttextcontainer}>{this.state.article.source}</Text>

                <Text style={styles.contentlabel}>Url</Text>
                <Text style={styles.contenttextcontainer}>{this.state.article.url}</Text>

                <Text style={styles.contentlabel}>Byline</Text>
                <Text style={styles.contenttextcontainer}>{this.state.article.byline}</Text>

                <Text style={styles.contentlabel}>Section</Text>
                <Text style={styles.contenttextcontainer}>{this.state.article.section}</Text>

                <Text style={styles.contentlabel}>Adxkeywords</Text>
                <Text style={styles.contenttextcontainer}>{this.state.article.adx_keywords}</Text>

                <Text style={styles.contentlabel}>Section</Text>
                <Text style={[styles.contenttextcontainer, { marginBottom: 20 }]}>{this.state.article.section}</Text>

              </View>
            </ScrollView>
          }
        </View>
      </SafeAreaView>
    );
  }
}
