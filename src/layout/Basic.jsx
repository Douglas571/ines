// Third party components...
import Box from '@mui/material/Box'

// Own components...
import ActionBar from '~/components/ActionBar'

const BasicLayout = (props) => {
  const { 
    title,
    children,
  } = props
  return (
    <>
      <ActionBar 
        title={title}
      />

      <Box py={2} px={2}>
        {children}
      </Box>
    </>
  )
}

export default BasicLayout