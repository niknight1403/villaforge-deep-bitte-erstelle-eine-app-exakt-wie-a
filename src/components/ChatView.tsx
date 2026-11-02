import React from 'react';
import { useRouter } from 'next/router';
import { FaChevronLeft } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Avatar } from '@chakra-ui/react';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';

const ChatView = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleBack = () => {
    router.back();
  };

  return (
    <Box bg="#0F0F13" h="100vh" overflowY="auto">
      <Flex
        bg="#1A1A22"
        p="2"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        top="0"
        w="100%"
      >
        <IconButton
          icon={<FaChevronLeft />}
          onClick={handleBack}
          colorScheme="pink"
          variant="outline"
          size="sm"
        />
        <Flex alignItems="center">
          <Avatar size="sm" mr="2" name="User" />
          <Text color="#FFFFFF">Username</Text>
          <Box bg="#00FF00" borderRadius="50%" ml="2" w="8px" h="8px" />
        </Flex>
        <IconButton
          icon={<BiDotsHorizontalRounded />}
          colorScheme="gray"
          variant="outline"
          size="sm"
        />
      </Flex>

      {/* Chat Messages */}
    </Box>
  );
};

export default ChatView;