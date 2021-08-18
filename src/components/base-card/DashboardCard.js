import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardHeader, CardContent } from '@material-ui/core';

const DashboardCard = ({
  custompadding,
  customheaderpadding,
  customdisplay,
  custommargin,
  title,
  subtitle,
  action,
  children,
}) => (
  <Card
    variant="outlined"
    sx={{
      p: custompadding,
      '& .MuiCardContent-root:last-child': {
        pb: custompadding,
      },
    }}
  >
    <CardHeader
      sx={{
        p: customheaderpadding,
        display: {
          xs: customdisplay,
          lg: 'flex',
          sm: 'flex',
        },
      }}
      title={
        <Typography
          variant="h3"
          fontWeight="500"
          sx={{
            mb: {
              xs: custommargin,
            },
          }}
        >
          {title}
        </Typography>
      }
      subtitle={subtitle}
      action={action || ''}
    />
    {/* content area */}
    <CardContent
      sx={{
        p: custompadding,
      }}
    >
      {children}
    </CardContent>
  </Card>
);

DashboardCard.propTypes = {
  custompadding: PropTypes.string,
  customheaderpadding: PropTypes.string,
  customdisplay: PropTypes.string,
  custommargin: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.any,
  children: PropTypes.node,
};

export default DashboardCard;
