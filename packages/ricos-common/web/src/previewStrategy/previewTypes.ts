interface PreviewRule {
  _if: unknown;
  _then: unknown;
}

interface ContentStateTransformation {
  apply: (content: RicosContent) => RicosContent;
  rule: (ruleProps: PreviewRule) => ContentStateTransformation;
  toObject: () => unknown;
}

interface PreviewConfig {
  transformation?: ContentStateTransformation;
  contentInteractionMappers?: unknown;
  onPreviewExpand?: () => void;
}