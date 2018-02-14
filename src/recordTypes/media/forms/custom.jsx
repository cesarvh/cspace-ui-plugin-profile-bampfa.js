const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = pluginContext.layoutComponents;

  const {
    Field,
    Subrecord,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="media" collapsible>
        <Row>
          <Field name="imageNumber" subpath="ns2:media_bampfa" />
          <Field name="primaryDisplay" subpath="ns2:media_bampfa" />
        </Row>

        <Panel name="file" collapsible>
          <Subrecord name="blob" showDetachButton />
        </Panel>

        <Row>
          <Field name="externalUrl" />
          <Field name="websiteDisplayLevel" subpath="ns2:media_bampfa" />
        </Row>

        {/* TODO: Break out measuredPartGroupList */}

        <Field name="measuredPartGroupList">
          <Field name="measuredPartGroup" >
            <Panel>
              <Row>
                <Field name="measuredPart" />
                <Field name="dimensionSummary" />
              </Row>

              <Field name="dimensionSubGroupList" >
                <Field name="dimensionSubGroup">
                  <Field name="dimension" />
                  <Field name="value" />
                  <Field name="measurementUnit" />
                  <Field name="valueQualifier" />
                </Field>
              </Field>
              <Field name="measuredPartNote" />
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="contributor" />
            <Field name="creator" />

            <Field name="languageList">
              <Field name="language" />
            </Field>

            <Field name="publisher" />

            <Field name="relationList">
              <Field name="relation" />
            </Field>

            <Field name="copyrightStatement" />
          </Col>

          <Col>
            <Field name="typeList">
              <Field name="type" />
            </Field>

            <Field name="coverage" />

            <Field name="dateGroupList">
              <Field name="dateGroup" />
            </Field>

            <Field name="source" />

            <Field name="subjectList">
              <Field name="subject" />
            </Field>

            <Field name="rightsHolder" />
          </Col>
        </Cols>

        <Field name="description" />
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
