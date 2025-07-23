import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyBio = {
  identity: {
    npm: 212310016,
    firstname: "Azzahra",
    middlename: "Kusuma",
    lastname: "Z.S",
  },
  educations: [
    { id: 1, school: "SDN Pasirmuncang 1" },
    { id: 2, school: "SMPN 13 Bogor" },
    { id: 3, school: "Primagama Homeschool" },
  ],
  mobile_phone: 81386861361,
  email: "2232310016@student.ibik.ac.id",
  gender: 'F',
  tall_body: 158,
  weight_body: 42,
};

const BioDetails = (props) => {
  const { identity, mobile_phone, email } = props.bio;
  return (
    <View>
      <Text style={styles.text}>NPM: {identity.npm}</Text>
      <Text style={styles.text}>Name: {identity.firstname} {identity.middlename} {identity.lastname}</Text>
      <Text style={styles.text}>Phone: {mobile_phone}</Text>
      <Text style={styles.text}>Email: {email}</Text>
    </View>
  );
};

export default class MyBioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: MyBio,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>My Bio</Text>
        <BioDetails bio={this.state.bio} />

        <Text style={styles.subheading}>Educations:</Text>
        {this.state.bio.educations.map(edu => (
          <Text key={edu.id} style={styles.text}>- {edu.school}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subheading: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 4,
  },
});
