import React from 'react';
import { StyleSheet,  Text, View, Button  } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';

//aws authentication code
import {useAuthenticator} from '@aws-amplify/ui-react-native';

export default function ProfileScreenInfo({ path }: { path: string }) {
  const { signOut } = useAuthenticator();

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}>
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>{path}</MonoText>
        </View>

        <Text style={styles.getStartedText}>
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://www.globalstaffcapital.com">
          <Text style={styles.helpLinkText}>
            Tap here to open the Global Staff Capital website from Profile/Home page
          </Text>
        </ExternalLink>
      </View>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    backgroundColor: '#ffffff',
    color: 'teal',
  },
  homeScreenFilename: {
    marginVertical: 7,
    color: '#0000ff',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
    backgroundColor: '#ffffff',
    color: '#0000ff',
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    color: '#000000',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    color: 'teal',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
    color:'teal',
    fontWeight: 'bold',
  },
});
